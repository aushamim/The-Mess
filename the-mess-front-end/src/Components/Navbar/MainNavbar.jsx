/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useGlobalState from "../../Hooks/useGlobalState";

const MainNavbar = ({ scrolled }) => {
  const { user, logout } = useGlobalState();
  const navigate = useNavigate();

  return (
    <div
      className={`px-8 xl:px-60 flex items-center fixed top-0 left-0 right-0 bg-white backdrop-blur duration-300 z-50 shadow-sm ${
        scrolled ? "h-14 bg-opacity-80" : "h-20 bg-opacity-100"
      }`}
    >
      <div className="flex-grow">
        <Link to="/" className="text-3xl font-semibold">
          THE <span className="text-purple-600">MESS</span>
        </Link>
      </div>

      <div className="hidden xl:flex items-center gap-5">
        <HashLink
          smooth
          to="/#"
          className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
        >
          Home
        </HashLink>
        <HashLink
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
          to="/#features"
          className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
        >
          Features
        </HashLink>
        <HashLink
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
          to="/#about-us"
          className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
        >
          About Us
        </HashLink>
        <HashLink
          smooth
          to="/#pricing"
          className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
        >
          Pricing
        </HashLink>
        <HashLink
          smooth
          to="/#contact-us"
          className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
        >
          Contact Us
        </HashLink>
        <Link
          to="/"
          className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
        >
          To-Let
        </Link>
        {user ? (
          <>
            <Link
              to="/login"
              className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
            >
              Dashboard
            </Link>
            <button
              className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
              onClick={() => {
                logout(navigate);
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
          >
            Login
          </Link>
        )}
      </div>

      <div className="drawer drawer-end w-fit block xl:hidden relative">
        <input id="main-nav" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="main-nav" className="drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="main-nav"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-white bg-opacity-90 backdrop-blur text-base-content">
            {/* Sidebar content here */}
            <li>
              <HashLink
                smooth
                to="/#"
                className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#features"
                className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
              >
                Features
              </HashLink>
            </li>
            <li>
              <HashLink
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "center" })
                }
                to="/#about-us"
                className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
              >
                About Us
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#pricing"
                className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
              >
                Pricing
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contact-us"
                className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
              >
                Contact Us
              </HashLink>
            </li>
            <li>
              <Link
                to="/"
                className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
              >
                To-Let
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
                    onClick={() => {
                      logout(navigate);
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
