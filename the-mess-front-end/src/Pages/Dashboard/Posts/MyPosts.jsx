import ToLetCard from "../../../Components/Cards/ToLetCard";
import Loader from "../../../Components/Loader/Loader";
import useGlobalState from "../../../Hooks/useGlobalState";

const MyPosts = () => {
  const { postsLoading, userPosts } = useGlobalState();
  return (
    <div className="p-10">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-semibold uppercase">My Posts</h1>
        <span className="h-1.5 w-36 mt-1 mx-auto bg-purple-500 block rounded"></span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {postsLoading ? (
          <div className="col-span-2">
            <Loader />
          </div>
        ) : userPosts?.length == 0 ? (
          <div className="flex flex-col items-center col-span-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-36 h-36 stroke-purple-700"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2.5" />
              <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M20.2 20.2l1.8 1.8" />
            </svg>
            <p className="text-2xl font-semibold text-purple-600">No Posts</p>
          </div>
        ) : (
          userPosts?.map((post) => (
            <ToLetCard key={userPosts?.indexOf(post)} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyPosts;
