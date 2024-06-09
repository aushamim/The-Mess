/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DashboardNavTop = ({ scrolled }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-white backdrop-blur duration-300 xl:z-10 shadow-sm flex gap-8 ${
        scrolled ? "h-12 bg-opacity-80" : "h-16 bg-opacity-100"
      }`}
    >
      <div className="w-52 flex items-center justify-center">
        <Link to="/" className="text-3xl font-semibold">
          THE <span className="text-purple-600">MESS</span>
        </Link>
      </div>
      <div className="flex-grow flex items-center justify-end px-8">
        <div className="hidden xl:flex items-center gap-5">
          <Link to="/">Home</Link>
          <Link>akjsdk</Link>
        </div>

        <div className="block xl:hidden">
          <label htmlFor="dashboard-drawer" className="drawer-button">
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
      </div>
    </div>
  );
};

export default DashboardNavTop;
