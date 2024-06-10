/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import useGlobalState from "../../Hooks/useGlobalState";

const DashboardNavTop = ({ scrolled }) => {
  const { logout } = useGlobalState();
  const navigate = useNavigate();
  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-white backdrop-blur duration-300 xl:z-10 shadow-sm flex gap-8 ${
        scrolled ? "h-12 bg-opacity-80" : "h-16 bg-opacity-100"
      }`}
    >
      <div className="w-52 flex items-center justify-center xl:border-r border-purple-100">
        <Link to="/" className="text-3xl font-semibold">
          THE <span className="text-purple-600">MESS</span>
        </Link>
      </div>
      <div className="flex-grow flex items-center justify-end px-8">
        <div className="hidden xl:flex items-center gap-5">
          <Link to="/" className="tooltip tooltip-bottom" data-tip="Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 fill-purple-400 hover:fill-purple-600 duration-300"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
          </Link>
          <Link
            to="/dashboard/notifications"
            className="tooltip tooltip-bottom"
            data-tip="Notifications"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 fill-purple-400 hover:fill-purple-600 duration-300"
            >
              <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
              <path
                fillRule="evenodd"
                d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            to="/dashboard/profile"
            className="tooltip tooltip-bottom"
            data-tip="Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 fill-purple-400 hover:fill-purple-600 duration-300"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <button
            className="tooltip tooltip-bottom"
            data-tip="Logout"
            onClick={() => {
              logout(navigate);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 fill-purple-400 hover:fill-purple-600 duration-300"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
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
