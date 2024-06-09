import { Link, useNavigate } from "react-router-dom";
import useGlobalState from "../../Hooks/useGlobalState";
import { toast } from "sonner";
import { useEffect } from "react";

const Login = () => {
  const { APIHost, setUserId, user } = useGlobalState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements["username"].value;
    const password = e.target.elements["password"].value;

    const promise = () => {
      return fetch(`${APIHost}/user/login/`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            throw new Error(data.error);
          } else if (data.username) {
            throw new Error(data.username);
          } else {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user_id", data.user_id);
            setUserId(localStorage.getItem("user_id") || null);
            navigate("/dashboard", { replace: true });
          }
        })
        .catch((error) => {
          throw error;
        });
    };

    toast.promise(promise, {
      loading: "Logging in. Please wait.",
      success: "Logged in successfully",
      error: (error) => {
        return error;
      },
    });
  };

  useEffect(() => {
    if (user) {
      toast.warning("You are already logged in.");
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="pt-10 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
      <div className="px-8 xl:pl-60">
        <div className="mb-8 -ml-0.5">
          <h1 className="text-7xl font-semibold">Hi</h1>
          <p className="text-3xl ml-0.5">
            Please <span className="text-purple-600">login</span> to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="xl:mb-32">
          <label className="form-control w-full mb-2">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input
              id="username"
              type="text"
              placeholder="Type your username here"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              id="password"
              type="password"
              placeholder="Type your password here"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>

          <div className="mt-10 flex items-center justify-end gap-5">
            <p className="mb-1 flex-gro">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-purple-600">
                Register here.
              </Link>
            </p>
            <input type="submit" value="Login" className="btn-purple" />
          </div>
        </form>
      </div>
      <div>
        <dotlottie-player
          src="https://lottie.host/fa805892-faf0-42ed-9410-9cfe58a68a97/orhB1w8nUa.json"
          style={{ width: "100%" }}
          background="transparent"
          speed="0.7"
          direction="1"
          playMode="normal"
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
};

export default Login;
