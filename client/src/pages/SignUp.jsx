import { Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
function SignUp() {
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
            writers. Sign up now to access exclusive content, engage with fellow
            members.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded text-white w-40 h-10 font-bold">
              Sign Up
            </button>
          </form>
          <div className="flex gap-2 text-sm">
            <span>Have an Account?</span>
            <Link to="sign-in" className="text-blue-500 font-bold underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
