import { useState } from "react";
import { toast } from "sonner";
import useGlobalState from "../../../Hooks/useGlobalState";

const Profile = () => {
  const { APIHost, token, user, loadUser } = useGlobalState();
  const [editAccess, setEditAccess] = useState(false);

  const handleEditProfile = (e) => {
    e.preventDefault();

    const username = e.target.elements["username"].value;
    const first_name = e.target.elements["first_name"].value;
    const last_name = e.target.elements["last_name"].value;
    const email = e.target.elements["email"].value;
    const phone_no = e.target.elements["phone_no"].value;
    const address = e.target.elements["address"].value;

    const promise = () => {
      return fetch(`${APIHost}/user/basic-info/${user?.id}/`, {
        method: "PUT",
        headers: {
          Authorization: `Token ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          first_name,
          last_name,
          email,
          phone_no,
          address,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            throw new Error(data.error);
          } else if (
            data.username[0] == "A user with that username already exists."
          ) {
            throw new Error(data.username);
          } else {
            loadUser();
          }
        })
        .catch((error) => {
          throw error;
        });
    };

    toast.promise(promise, {
      loading: "Updating profile. Please wait.",
      success: "Profile updated successfully",
      error: (error) => {
        return error;
      },
    });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();

    const old_password = e.target.elements["old_password"].value;
    const new_password = e.target.elements["new_password"].value;
    const confirm_password = e.target.elements["confirm_password"].value;

    const promise = () => {
      return fetch(`${APIHost}/user/change-password/`, {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          old_password,
          new_password,
          confirm_password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            throw new Error(data.error);
          } else {
            e.target.elements["old_password"].value = "";
            e.target.elements["new_password"].value = "";
            e.target.elements["confirm_password"].value = "";
            return data;
          }
        })
        .catch((error) => {
          throw error;
        });
    };

    toast.promise(promise, {
      loading: "Changing password. Please wait.",
      success: "Password changed successfully",
      error: (error) => {
        return error;
      },
    });
  };

  return (
    <div className="p-8 grid grid-cols-1 xl:grid-cols-2 gap-32">
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-semibold uppercase text-center xl:text-left">
            Personal Information
          </h1>
          <span className="h-1.5 w-36 mt-1 mx-auto xl:mx-0 bg-purple-500 block rounded"></span>
        </div>

        <form
          className="grid grid-cols-2 gap-x-5 gap-y-2"
          onSubmit={handleEditProfile}
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input
              id="username"
              type="text"
              placeholder="Type your username here"
              className={
                editAccess
                  ? "input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
                  : "input input-bordered w-full rounded-md border-purple-200 disabled:bg-white disabled:border-purple-200 disabled:text-inherit"
              }
              defaultValue={user?.username}
              required
              disabled={!editAccess}
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
              className={
                editAccess
                  ? "input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
                  : "input input-bordered w-full rounded-md border-purple-200 disabled:bg-white disabled:border-purple-200 disabled:text-inherit"
              }
              defaultValue={user?.email}
              required
              disabled={!editAccess}
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
              className={
                editAccess
                  ? "input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
                  : "input input-bordered w-full rounded-md border-purple-200 disabled:bg-white disabled:border-purple-200 disabled:text-inherit"
              }
              defaultValue={user?.first_name}
              required
              disabled={!editAccess}
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
              className={
                editAccess
                  ? "input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
                  : "input input-bordered w-full rounded-md border-purple-200 disabled:bg-white disabled:border-purple-200 disabled:text-inherit"
              }
              defaultValue={user?.last_name}
              required
              disabled={!editAccess}
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
              className={
                editAccess
                  ? "input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
                  : "input input-bordered w-full rounded-md border-purple-200 disabled:bg-white disabled:border-purple-200 disabled:text-inherit"
              }
              defaultValue={user?.phone_no}
              required
              disabled={!editAccess}
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
              className={
                editAccess
                  ? "input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
                  : "input input-bordered w-full rounded-md border-purple-200 disabled:bg-white disabled:border-purple-200 disabled:text-inherit"
              }
              defaultValue={user?.address}
              required
              disabled={!editAccess}
            />
          </label>
          <input
            type="submit"
            value="Save"
            id="save-profile"
            className="hidden"
          />
        </form>
        <div className="flex items-center justify-end gap-5 mt-5">
          <button
            className="btn-purple"
            onClick={() => {
              setEditAccess(!editAccess);
            }}
          >
            {editAccess ? "Disable" : "Enable"} Editing
          </button>
          <button
            className="btn-purple"
            onClick={() => {
              if (editAccess) {
                document.getElementById("save-profile").click();
              } else {
                toast.warning("Edit access is not active.");
              }
            }}
          >
            Save
          </button>
        </div>
      </div>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-semibold uppercase text-center xl:text-left">
            Change Password
          </h1>
          <span className="h-1.5 w-36 mt-1 mx-auto xl:mx-0 bg-purple-500 block rounded"></span>
        </div>

        <form className="pr-32" onSubmit={handlePasswordChange}>
          <label className="form-control w-full mb-2">
            <div className="label">
              <span className="label-text">Old Password</span>
            </div>
            <input
              id="old_password"
              type="password"
              placeholder="Type your current password"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>
          <label className="form-control w-full mb-2">
            <div className="label">
              <span className="label-text">New Password</span>
            </div>
            <input
              id="new_password"
              type="password"
              placeholder="Type a new password"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>
          <label className="form-control w-full mb-2">
            <div className="label">
              <span className="label-text">Confirm Password</span>
            </div>
            <input
              id="confirm_password"
              type="password"
              placeholder="Re type your new password"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>

          <input
            type="submit"
            value="Change Password"
            className="btn-purple mt-5 ml-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
