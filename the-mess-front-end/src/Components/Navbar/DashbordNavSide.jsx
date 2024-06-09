import { Link } from "react-router-dom";

const DashbordNavSide = () => {
  return (
    <div>
      <div className="drawer xl:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-side">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 pt-5 w-52 min-h-full bg-white bg-opacity-90 xl:bg-opacity-100 backdrop-blur text-base-content border-t border-r border-purple-100">
            <li>
              <Link
                to="/dashboard"
                className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/profile"
                className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
              >
                Profile
              </Link>
            </li>
            <li></li>
            <li>
              <Link
                to="/dashboard/my-posts"
                className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
              >
                My Posts
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/add-post"
                className="font-semibold text-gray-500 hover:text-purple-500 duration-300"
              >
                Add Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashbordNavSide;
