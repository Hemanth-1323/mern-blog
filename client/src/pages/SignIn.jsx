import { Alert, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="min-h-screen mt-5">
      <div className="flex-1 p-3 max-w-xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left */}
        <div className="flex-1">
          <Link
            to="/"
            className="flex items-center space-x-2 text-4xl font-bold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Hemanths
            </span>
            <span>Blog</span>
          </Link>
          <p className="text-sm mt-5">
            Welcome to Hemanths Blog! Join our community of avid readers and
            writers. Sign in now to access exclusive content, engage with fellow
            members.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="*********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <button
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded text-white w-40 h-10 font-bold"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="xs" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
          <div className="flex gap-2 text-sm">
            <span>Dont have an Account?</span>
            <Link to="sign-in" className="text-blue-500 font-bold underline">
              Sign Up
            </Link>
          </div>
          {errorMessage && <Alert color="failure">{errorMessage}</Alert>}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
