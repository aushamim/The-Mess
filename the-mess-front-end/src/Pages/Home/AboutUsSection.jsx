const AboutUsSection = () => {
  return (
    <div
      id="about-us"
      className="min-h-[50vh] px-8 py-16 xl:p-20 bg-[url(/assets/images/about_us_bg.png)] bg-cover bg-center"
    >
      <div className="px-8 xl:px-60 mb-10 xl:mb-20 text-center">
        <h1 className="text-4xl xl:text-5xl font-semibold uppercase">
          About us
        </h1>
        <span className="h-1.5 w-36 mt-1 mx-auto bg-purple-500 block rounded"></span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <dotlottie-player
            src="https://lottie.host/7745509b-5d65-4b74-bb76-87b025149dea/wG0QzmSTyc.json"
            style={{ width: "100%" }}
            background="transparent"
            speed="0.7"
            direction="1"
            playMode="normal"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="xl:pr-60 flex flex-col justify-center gap-3 xl:gap-10">
          <p className="text-xl xl:text-4xl text-justify capitalize">
            Some passionate developers of a small company that thrives to
            deliver the best possible services to everyone.
          </p>
          <p className="xl:text-2xl text-justify capitalize">
            Using our services you can easily manage your mess life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
