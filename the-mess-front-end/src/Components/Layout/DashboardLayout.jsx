import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavTop from "../Navbar/DashboardNavTop";
import DashbordNavSide from "../Navbar/DashbordNavSide";
import DashboardParticles from "../Particles/DashboardParticles";

const DashboardLayout = () => {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setScrollToTopVisible(true);
      } else {
        setScrollToTopVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        <DashboardNavTop scrolled={scrollToTopVisible} />

        <div>
          {/* Sidebar */}
          <div
            className={`w-52 duration-300 fixed left-0 ${
              scrollToTopVisible ? "top-12" : "top-16"
            }`}
          >
            <DashbordNavSide />
          </div>

          {/* All Pages */}
          <div>
            <div className="flex-grow xl:ml-52 pt-16 z-0">
              <Outlet></Outlet>
            </div>

            <div className="absolute top-16 left-0 xl:left-52 right-0 bottom-0 -z-10">
              <DashboardParticles />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={
          scrollToTopVisible
            ? "btn rounded-r-none p-0.5 xl:p-3 fixed right-0 bottom-10 bg-white"
            : "hidden"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default DashboardLayout;
