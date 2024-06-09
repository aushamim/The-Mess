import ToLetCard from "../../../Components/Cards/ToLetCard";

const MyPosts = () => {
  return (
    <div className="p-10">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-semibold uppercase">All Posts</h1>
        <span className="h-1.5 w-36 mt-1 mx-auto bg-purple-500 block rounded"></span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <ToLetCard />
        <ToLetCard />
        <ToLetCard />
        <ToLetCard />
        <ToLetCard />
        <ToLetCard />
        <ToLetCard />
        <ToLetCard />
      </div>
    </div>
  );
};

export default MyPosts;
