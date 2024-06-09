import { useNavigate } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import useGlobalState from "../../../Hooks/useGlobalState";
import { useEffect } from "react";
import { toast } from "sonner";

const DashboardHome = () => {
  const { user } = useGlobalState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      toast.warning("Please login to continue.");
      navigate("/login");
    }
  }, [user, navigate]);
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
