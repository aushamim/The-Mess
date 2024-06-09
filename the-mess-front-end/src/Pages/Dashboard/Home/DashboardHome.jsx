import Loader from "../../../Components/Loader/Loader";
import useGlobalState from "../../../Hooks/useGlobalState";

const DashboardHome = () => {
  const { user } = useGlobalState();
  return (
    <div className="p-8">
      {!user ? (
        <Loader />
      ) : (
        <h1 className="text-3xl font-medium">
          Welcome Back,{" "}
          <span className="capitalize font-semibold text-purple-600">
            {user?.first_name} {user?.last_name}
          </span>
        </h1>
      )}
    </div>
  );
};

export default DashboardHome;
