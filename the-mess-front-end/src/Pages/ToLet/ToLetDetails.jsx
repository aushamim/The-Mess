import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const ToLetDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="px-8 xl:px-60 py-10">
      <div className="mb-10 flex">
        <h1 className="text-3xl font-medium">
          Post By <span className="text-purple-600 font-semibold">Shamim</span>
        </h1>
        <div className="flex-grow flex items-center justify-end gap-5">
          <Link to={`/dashboard/edit-post/0`} className="btn-purple">
            Edit
          </Link>
          <button
            className="btn-red"
            onClick={() =>
              document.getElementById("confirm-post-delete").showModal()
            }
          >
            Delete
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:max-h-[30rem]">
        <div>
          <div className="flex bg-white p-5 rounded-md shadow-md shadow-purple-100 min-h-96">
            <table>
              <tbody>
                <tr>
                  <td>Type:</td>
                  <td className="pl-2">Room</td>
                </tr>
                <tr>
                  <td>Count:</td>
                  <td className="pl-2">1</td>
                </tr>
                <tr>
                  <td>Location:</td>
                  <td className="pl-2">Mohammadpur</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td className="pl-2">Mohammadpur Limited Housing</td>
                </tr>
                <tr>
                  <td>Map:</td>
                  <td className="pl-2">
                    <a
                      className="font-medium text-purple-600"
                      href="https://maps.app.goo.gl/Rb5wNmYD5aCMaqCo9"
                      target="_blank"
                    >
                      Click to Open
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Includes:</td>
                  <td className="pl-2">Wifi, Fridge, Lift, Water Filter</td>
                </tr>
                <tr>
                  <td>Rent:</td>
                  <td className="pl-2">5000</td>
                </tr>
                <tr>
                  <td>Contact:</td>
                  <td className="pl-2">01234567890</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white p-3 rounded-md shadow-md shadow-purple-100">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  className="xl:h-24 w-full object-cover rounded-md"
                />
              </SwiperSlide>
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
            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                className="xl:h-[32.5rem] w-full object-cover rounded-md"
              />
            </SwiperSlide>
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
                <button
                  className="btn-red"
                  onClick={() => {
                    toast.success("DDDDDDDDDDDDD");
                  }}
                >
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
