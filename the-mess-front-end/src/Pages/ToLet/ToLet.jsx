import { Link } from "react-router-dom";
import useGlobalState from "../../Hooks/useGlobalState";
import ToLetCard from "../../Components/Cards/ToLetCard";
import Loader from "../../Components/Loader/Loader";

const ToLet = () => {
  const { user, posts, postsLoading } = useGlobalState();
  return (
    <div className="px-8 xl:px-60 pt-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-5">
        <div>
          <h1 className="text-3xl font-semibold text-center xl:text-left">
            Vacancy <span className="text-purple-600">Posts</span>
          </h1>
        </div>
        <div className="flex-grow flex items-center justify-center xl:justify-end gap-5">
          {user ? (
            <div>
              <Link to="/dashboard/add-post" className="btn-purple !mb-0">
                Post <span className="hidden xl:inline">a Vacancy</span>
              </Link>
            </div>
          ) : (
            ""
          )}

          <label className="input input-bordered flex items-center gap-2 h-10 pr-0">
            <input type="text" className="grow w-full" placeholder="Search" />
            <button className="pr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </label>
        </div>
      </div>

      <div className="my-8 grid grid-cols-1 xl:grid-cols-2 gap-10">
        {postsLoading ? (
          <div className="col-span-2">
            <Loader />
          </div>
        ) : (
          posts?.map((post) => (
            <ToLetCard key={posts?.indexOf(post)} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default ToLet;
