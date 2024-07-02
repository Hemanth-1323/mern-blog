import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="flex items-center space-x-2 text-lg font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Hemanths
              </span>
              <span>Blog</span>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-4 sm:grid-cols- sm:gap-6 p-2">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://hemanth-1323.github.io/GPT3-Open-Ai-react/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GPT3-OpenAi
                </Footer.Link>
                <Footer.Link
                  href="https://hemanth-1323.github.io/html-themepark/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Theme Park
                </Footer.Link>
                <Footer.Link
                  href="https://hemanth-1323.github.io/Portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Hemanth-1323"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/hemanth-d-908993267/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  href="https://leetcode.com/hemanthdhamodharan1323/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LeetCode
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="/" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions
                </Footer.Link>
                <Footer.Link
                  href="https://leetcode.com/hemanthdhamodharan1323/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LeetCode
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between mt-3">
          <Footer.Copyright
            href="#"
            by="Hemanth's blog "
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 m-4 justify-center">
            <Footer.Icon
              href="https://leetcode.com/hemanthdhamodharan1323/"
              icon={SiLeetcode}
            />
            <Footer.Icon
              href="https://github.com/Hemanth-1323"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/hemanth-d-908993267/"
              icon={BsLinkedin}
            />
            <Footer.Icon href="#" icon={BsWhatsapp} />
            <Footer.Icon href="#" icon={BsTelegram} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
