import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-white p-8 xl:py-16 xl:px-60 grid grid-cols-1 xl:grid-cols-3">
        <div className="flex items-center justify-center xl:justify-start mb-4 pb-4 border-b xl:border-none">
          <h1 className="uppercase text-3xl font-semibold">
            The <span className="text-purple-600">Mess</span>
          </h1>
        </div>

        <div className="flex flex-col justify-center">
          <div>
            <h1 className="text-xl font-semibold uppercase text-center">
              Find Us On
            </h1>
            <span className="h-1.5 w-16 mt-1 mx-auto bg-purple-500 block rounded"></span>
          </div>

          <div className="flex justify-evenly mt-5 xl:px-16">
            <a
              href=""
              target="_blank"
              className="border-2 rounded-full p-1 border-transparent hover:border-purple-500 duration-300"
            >
              <img
                src="/assets/images/github.png"
                alt="github"
                className="w-10 h-10"
              />
            </a>
            <a
              href=""
              target="_blank"
              className="border-2 rounded-full p-1 border-transparent hover:border-purple-500 duration-300"
            >
              <img
                src="/assets/images/linkedin.png"
                alt="github"
                className="w-10 h-10"
              />
            </a>
            <a
              href=""
              target="_blank"
              className="border-2 rounded-full p-1 border-transparent hover:border-purple-500 duration-300"
            >
              <img
                src="/assets/images/reddit.png"
                alt="github"
                className="w-10 h-10"
              />
            </a>
            <a
              href=""
              target="_blank"
              className="border-2 rounded-full p-1 border-transparent hover:border-purple-500 duration-300"
            >
              <img
                src="/assets/images/twitter.png"
                alt="github"
                className="w-10 h-10"
              />
            </a>
            <a
              href=""
              target="_blank"
              className="border-2 rounded-full p-1 border-transparent hover:border-purple-500 duration-300"
            >
              <img
                src="/assets/images/facebook.png"
                alt="github"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>

        <div className="hidden xl:block">
          <div>
            <h1 className="text-xl font-semibold uppercase text-end">
              Quick Links
            </h1>
            <span className="h-1.5 w-16 mt-1 ml-auto bg-purple-500 block rounded"></span>
          </div>
          <div className="flex flex-col items-end mt-5">
            <Link
              to="/login"
              className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
            >
              Login
            </Link>
            <Link
              to="/to-let"
              className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
            >
              To-Let
            </Link>
            <Link
              to="/dashboard"
              className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-purple-500 p-3 text-white font-semibold text-center">
        ©️ 2024 Copyright Reserved - The Mess
      </div>
    </div>
  );
};

export default Footer;
