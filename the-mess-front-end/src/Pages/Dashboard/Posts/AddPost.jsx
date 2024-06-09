import { useEffect, useState } from "react";
import useGlobalState from "../../../Hooks/useGlobalState";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const { APIHost, token, userId, user, userPosts, loadPosts } =
    useGlobalState();
  const [limitCheck, setLimitCheck] = useState(
    user?.max_posts == -1
      ? false
      : user?.max_posts > userPosts?.length
      ? false
      : true
  );
  const navigate = useNavigate();

  const [urls, setUrls] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = parseInt(userId);
    const type = e.target.elements["type"].value;
    const count = e.target.elements["count"].value;
    const location = e.target.elements["location"].value;
    const full_address = e.target.elements["full_address"].value;
    const map = e.target.elements["map"].value;
    const extra = e.target.elements["extra"].value;
    const rent = e.target.elements["rent"].value;
    const contact = e.target.elements["contact"].value;
    const images = { urls: urls };

    if (type === "Default") {
      toast.warning("You need to select a type.");
      return;
    }
    if (urls.length == 0) {
      toast.warning("At least one image is required.");
      return;
    }

    const promise = () => {
      return fetch(`${APIHost}/posts/edit/`, {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          user,
          type,
          count,
          location,
          full_address,
          map,
          extra,
          rent,
          contact,
          images,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            throw new Error(data.error);
          } else if (data.username) {
            throw new Error(data.username);
          } else {
            loadPosts();
            navigate("/dashboard/my-posts", { replace: true });
          }
        })
        .catch((error) => {
          throw error;
        });
    };

    toast.promise(promise, {
      loading: "Creating new post. Please wait.",
      success: "Post created successfully",
      error: (error) => {
        return error;
      },
    });
  };

  const handleFileUpload = (e) => {
    e.preventDefault();

    const image = e.target.files[0];
    const imgFormData = new FormData();
    imgFormData.append("image", image);

    const promise = () => {
      return fetch(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        {
          method: "POST",
          body: imgFormData,
        }
      )
        .then((imgRes) => imgRes.json())
        .then((imgData) => setUrls([...urls, imgData?.data?.image?.url]))
        .catch((error) => {
          throw error;
        });
    };

    toast.promise(promise, {
      loading: "Uploading Image. Please wait.",
      success: "Image Uploaded successfully",
      error: (error) => {
        return error;
      },
    });
  };

  const limitWarning = () => {
    toast.error("Post limit reached. Upgrade to add more.");
  };
  useEffect(() => {
    if (limitCheck) {
      limitWarning();
    }
  }, [limitCheck]);

  return (
    <div className="p-10">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-semibold uppercase">Add Post</h1>
        <span className="h-1.5 w-36 mt-1 mx-auto bg-purple-500 block rounded"></span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        <form
          className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-5"
          onSubmit={handleSubmit}
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Type</span>
            </div>
            <select
              id="type"
              className="select select-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              defaultValue={"Default"}
              required
            >
              <option disabled value={"Default"}>
                Room / Seat
              </option>
              <option>Room</option>
              <option>Seat</option>
            </select>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Count</span>
            </div>
            <input
              id="count"
              type="number"
              placeholder="How many seat or room?"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Location</span>
            </div>
            <input
              id="location"
              type="text"
              placeholder="Where it is?"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Full Address</span>
            </div>
            <input
              id="full_address"
              type="text"
              placeholder="House No, Road No, Location"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Map</span>
            </div>
            <input
              id="map"
              type="text"
              placeholder="Google Map URL"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Extra Info</span>
            </div>
            <input
              id="extra"
              type="text"
              placeholder="Wifi, Fridge, Lift, Water Filter, etc"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Rent</span>
            </div>
            <input
              id="rent"
              type="number"
              placeholder="How much is the rent?"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Contact Info</span>
            </div>
            <input
              id="contact"
              type="text"
              placeholder="Phone No / Email address"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>

          <input
            type="submit"
            value="Post"
            className="hidden"
            id="add-post-submit-btn"
          />
        </form>

        <div className="mt-8">
          <div>
            <button
              className="bg-white rounded-md w-full text-center p-5 border-2 border-dashed border-purple-400 hover:border-purple-600 font-semibold text-gray-500 hover:text-purple-600 duration-300"
              onClick={() => {
                if (limitCheck) {
                  limitWarning();
                } else if (urls.length === 4) {
                  toast.warning("Maximum four images per post is allowed.");
                } else {
                  document.getElementById("post-image").click();
                }
              }}
            >
              Add Image ({4 - urls?.length} Remaining)
            </button>
            <input
              type="file"
              accept="image/*"
              name="post-image"
              id="post-image"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
          <div className="mt-5 bg-white p-3 rounded-md grid grid-cols-2 gap-5 justify-center">
            {urls?.length === 0 ? (
              <p className="text-center col-span-2">No Images</p>
            ) : (
              urls?.map((img) => (
                <div
                  key={urls?.indexOf(img)}
                  className="h-32 relative rounded-md overflow-hidden"
                >
                  <img
                    className="w-full h-full rounded-md object-cover"
                    src={img}
                    alt={`Uploaded Image ${urls?.indexOf(img) + 1}`}
                  />
                  <button
                    className="absolute top-0 right-0 px-2 py-0.5 rounded-bl-md bg-red-500 text-white font-bold text-xs"
                    onClick={() => {
                      const newUrls = [...urls];
                      newUrls.splice(urls?.indexOf(img), 1);
                      setUrls(newUrls);
                    }}
                  >
                    X
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          className="btn-purple !px-10"
          onClick={() => {
            if (limitCheck) {
              limitWarning();
            } else {
              document.getElementById("add-post-submit-btn").click();
            }
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
