import ToLetCard from "../../../Components/Cards/ToLetCard";
import Loader from "../../../Components/Loader/Loader";
import useGlobalState from "../../../Hooks/useGlobalState";

const MyPosts = () => {
  const { postsLoading, userPosts } = useGlobalState();
  return (
    <div className="p-10">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-semibold uppercase">All Posts</h1>
        <span className="h-1.5 w-36 mt-1 mx-auto bg-purple-500 block rounded"></span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {postsLoading ? (
          <div className="col-span-2">
            <Loader />
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
