import ParticlesComponent from "../../Components/Particles/ParticlesComponent";

const FeaturesSection = () => {
  return (
    <div
      id="features"
      className="min-h-screen xl:min-h-[50vh] bg-white relative"
    >
      <ParticlesComponent />

      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center">
        <div className="px-8 xl:px-60 mb-10 xl:mb-20 text-center">
          <h1 className="text-4xl xl:text-5xl font-semibold uppercase">
            Features
          </h1>
          <span className="h-1.5 w-36 mt-1 mx-auto bg-purple-500 block rounded"></span>
        </div>
        <div className="px-8 xl:px-60 grid grid-cols-1 xl:grid-cols-4 gap-10 items-center">
          <div className="p-5 rounded-md bg-white border border-purple-100 shadow-2xl shadow-purple-200 hover:scale-110 duration-300">
            <p className="text-3xl font-semibold mb-3">Find Vacancy</p>
            <p>Here you can find a room to rent or a seat to share.</p>
          </div>
          <div className="p-5 rounded-md bg-white border border-purple-100 shadow-2xl shadow-purple-200 hover:scale-110 duration-300">
            <p className="text-3xl font-semibold mb-3">Post Vacancy</p>
            <p>
              Here you can rent out a room to or a single seat or multiple
              seats.
            </p>
          </div>
          <div className="p-5 rounded-md bg-white border border-purple-100 shadow-2xl shadow-purple-200 hover:scale-110 duration-300">
            <p className="text-3xl font-semibold mb-3">Track Expanses</p>
            <p>
              Here you can track various expanses like meals, current bills,
              etc.
            </p>
          </div>
          <div className="p-5 rounded-md bg-white border border-purple-100 shadow-2xl shadow-purple-200 hover:scale-110 duration-300">
            <p className="text-3xl font-semibold mb-3">Cloud Save</p>
            <p>
              All of your data will be saved and accessible from anywhere by
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
