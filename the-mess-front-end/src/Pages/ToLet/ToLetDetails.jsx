import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import useGlobalState from "../../Hooks/useGlobalState";

const ToLetDetails = () => {
  const { APIHost, userId, token, loadPosts, admin } = useGlobalState();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(thumbsSwiper);

  useEffect(() => {
    fetch(`${APIHost}/posts/list/${id}/`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [APIHost, id]);

  const handleDelete = () => {
    const promise = () => {
      return fetch(`${APIHost}/posts/edit/${id}/`, {
        method: "DELETE",
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then(() => {
          loadPosts();
          navigate("/to-let", { replace: true });
        })
        .catch((error) => {
          throw error;
        });
    };

    toast.promise(promise, {
      loading: "Removing post. Please wait.",
      success: "Post removed successfully",
      error: (error) => {
        return error;
      },
    });
  };

  return (
    <div className="px-8 xl:px-60 py-10">
      <div className="mb-10 flex">
        <h1 className="text-3xl font-medium">
          Post By{" "}
          <span className="text-purple-600 font-semibold capitalize">
            {post?.user?.username}
          </span>
        </h1>
        {admin || post?.user?.id == userId ? (
          <div className="flex-grow flex items-center justify-end gap-5">
            <Link
              to={`/dashboard/edit-post/${post?.id}`}
              className="btn-purple"
            >
              {admin ? "Edit (Admin)" : "Edit"}
            </Link>
            <button
              className="btn-red"
              onClick={() =>
                document.getElementById("confirm-post-delete").showModal()
              }
            >
              {admin ? "Delete (Admin)" : "Delete"}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-10 xl:max-h-[30rem]">
        <div>
          <div className="flex bg-white p-5 rounded-md shadow-md shadow-purple-100 min-h-96">
            <table>
              <tbody>
                <tr>
                  <td>Type:</td>
                  <td className="pl-2">{post?.type}</td>
                </tr>
                <tr>
                  <td>Count:</td>
                  <td className="pl-2">{post?.count}</td>
                </tr>
                <tr>
                  <td>Location:</td>
                  <td className="pl-2">{post?.location}</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td className="pl-2">{post?.full_address}</td>
                </tr>
                <tr>
                  <td>Map:</td>
                  <td className="pl-2">
                    <a
                      className="font-medium text-purple-600"
                      href={post?.map}
                      target="_blank"
                    >
                      Click to Open
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Includes:</td>
                  <td className="pl-2">{post?.extra}</td>
                </tr>
                <tr>
                  <td>Rent:</td>
                  <td className="pl-2">{post?.rent}</td>
                </tr>
                <tr>
                  <td>Contact:</td>
                  <td className="pl-2">{post?.contact}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white p-3 rounded-md shadow-md shadow-purple-100">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {post?.images?.urls.map((img) => (
                <SwiperSlide key={Math.random()}>
                  <img
                    src={img}
                    className="h-12 xl:h-24 w-full object-cover rounded-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="bg-white p-2 rounded-md shadow-md shadow-purple-100">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            // thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
            thumbs={{ swiper: thumbsSwiper }}
            threshold={5}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            className="mySwiper2"
          >
            {post?.images?.urls.map((img) => (
              <SwiperSlide key={Math.random()}>
                <img
                  src={img}
                  className="h-72 xl:h-[32.5rem] w-full object-cover rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div>
        <dialog id="confirm-post-delete" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Warning!</h3>
            <p className="py-4">Do you really want to delete this post?</p>
            <div className="modal-action">
              <form method="dialog" className="flex gap-3">
                <button className="btn-red" onClick={handleDelete}>
                  Delete
                </button>
                <button className="btn-green">Cancel</button>
              </form>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default ToLetDetails;
