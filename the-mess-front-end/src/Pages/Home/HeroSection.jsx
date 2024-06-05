import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="lg:-mt-20 min-h-screen bg-[url(/assets/images/hero_bg.png)] grid grid-cols-1 xl:grid-cols-2">
      <div className="flex flex-col justify-end xl:justify-center px-8 pt-8 xl:pl-60 xl:pt-0">
        <h1 className="text-2xl xl:text-4xl font-semibold mb-2">
          Simplifying The
        </h1>
        <h1 className="text-6xl xl:text-8xl font-semibold mb-2 -ml-1">
          <span className="text-purple-700">Mess</span> Life!
        </h1>
        <p className="text-xs xl:text-base">
          Find places to share and live with bachelors and manage your mess life
          all in one place!
        </p>
        <Link to="/login" className="btn-purple w-fit mt-5">
          Sign Up Now
        </Link>
      </div>
      <div className="pb-10 xl:pb-0">
        <dotlottie-player
          src="https://lottie.host/aa018bb8-0715-43cb-85fe-4315479c6550/qX3AHk3NCI.json"
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

export default HeroSection;
