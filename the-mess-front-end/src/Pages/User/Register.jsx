import { Link, useNavigate } from "react-router-dom";
import useGlobalState from "../../Hooks/useGlobalState";
import { toast } from "sonner";
import { useEffect } from "react";

const Register = () => {
  const { APIHost, setUserId, userId, user } = useGlobalState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements["username"].value;
    const first_name = e.target.elements["first_name"].value;
    const last_name = e.target.elements["last_name"].value;
    const email = e.target.elements["email"].value;
    const phone_no = e.target.elements["phone_no"].value;
    const address = e.target.elements["address"].value;
    const password = e.target.elements["password"].value;
    const confirm_password = e.target.elements["confirm_password"].value;

    const promise = () => {
      return fetch(`${APIHost}/user/register/`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username,
          first_name,
          last_name,
          email,
          phone_no,
          address,
          password,
          confirm_password,
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
            setUserId(data.user_id);
            navigate("/dashboard", { replace: true });
          }
        })
        .catch((error) => {
          throw error;
        });
    };

    toast.promise(promise, {
      loading: "Creating new user. Please wait.",
      success: "Registered successfully",
      error: (error) => {
        return error;
      },
    });
  };

  useEffect(() => {
    if (userId) {
      toast.warning("You are already logged in.");
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate, userId]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center my-40">
      <div className="px-8 xl:pl-60">
        <div className="mb-8 -ml-0.5">
          <h1 className="text-7xl font-semibold">Hi</h1>
          <p className="text-3xl ml-0.5">
            Welcome to <span className="font-semibold uppercase">The</span>{" "}
            <span className="text-purple-600 font-semibold uppercase">
              Mess
            </span>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="xl:mb-32 grid grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-2"
        >
          <label className="form-control w-full">
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
              <span className="label-text">Email</span>
            </div>
            <input
              id="email"
              type="email"
              placeholder="Type your email here"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              id="first_name"
              type="text"
              placeholder="Type your first name here"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              id="last_name"
              type="text"
              placeholder="Type your last name here"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Phone No.</span>
            </div>
            <input
              id="phone_no"
              type="text"
              placeholder="Type your phone no. here"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Address</span>
            </div>
            <input
              id="address"
              type="text"
              placeholder="Type your address here"
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
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Confirm Password</span>
            </div>
            <input
              id="confirm_password"
              type="password"
              placeholder="Re type your password here"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>

          <div className="mt-10 flex items-center justify-end gap-5 xl:col-span-2">
            <p className="mb-1 flex-gro">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-600">
                Login here.
              </Link>
            </p>
            <input type="submit" value="Register" className="btn-purple" />
          </div>
        </form>
      </div>

      <div className="xl:pr-20">
        <dotlottie-player
          src="https://lottie.host/0b54fa8b-7d01-4ffb-955d-36128dacc15c/6A8Z2J3wRm.json"
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

export default Register;
