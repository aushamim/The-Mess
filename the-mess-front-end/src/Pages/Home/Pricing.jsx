import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="min-h-screen bg-white bg-[url(/assets/images/pricing_bg.png)] bg-no-repeat bg-cover px-8 py-16 xl:py-20"
    >
      <div className="px-8 xl:px-60 mb-10 xl:mb-20 text-center">
        <h1 className="text-4xl xl:text-5xl font-semibold uppercase">
          pricing
        </h1>
        <span className="h-1.5 w-36 mt-1 mx-auto bg-purple-500 block rounded"></span>
      </div>
      <div className="xl:w-2/3 mx-auto grid grid-cols-1 xl:grid-cols-4 gap-8">
        <div className="bg-white h-fit rounded-md px-5 py-10 my-5 hover:mt-0 duration-300 border border-purple-100 shadow-2xl shadow-purple-200 text-center">
          <p className="text-2xl font-semibold">Free</p>
          <span className="h-1.5 w-10 mt-1 mb-3 mx-auto bg-purple-500 block rounded"></span>
          <div className="flex font-semibold justify-center my-10 gap-1">
            <p className="text-2xl self-start">$</p>
            <p className="text-7xl self-center">0</p>
            <p className="self-end pb-1">/month</p>
          </div>
          <div>
            <p className="my-4">1 Vacancy Post</p>
            <p className="my-4">5 Members</p>
            <p className="my-4">1 Group</p>
            <p className="my-4">1 Month Data Storage</p>
            <p className="my-4">Basic Data Visualization</p>
            <p className="my-4 line-through">Advanced Data Visualization</p>
            <p className="my-4 line-through">Email Notification</p>
            <p className="my-4 line-through">Export Data</p>
            <p className="my-4 line-through">Support</p>
          </div>
          <div>
            <Link to="/login" className="btn-purple mt-8 w-fit mx-auto">
              Sign Up
            </Link>
          </div>
        </div>

        <div className="bg-purple-700 text-white h-fit rounded-md p-5 py-14 hover:-mt-5 duration-300 border border-purple-700 shadow-2xl shadow-purple-400 text-center">
          <p className="text-2xl font-semibold">Basic</p>
          <span className="h-1.5 w-10 mt-1 mb-3 mx-auto bg-purple-100 block rounded"></span>
          <div className="flex font-semibold justify-center my-10 gap-1">
            <p className="text-2xl self-start">$</p>
            <p className="text-7xl self-center">5</p>
            <p className="self-end pb-1">/month</p>
          </div>
          <div>
            <p className="my-4">3 Vacancy Post</p>
            <p className="my-4">10 Members</p>
            <p className="my-4">1 Group</p>
            <p className="my-4">3 Month Data Storage</p>
            <p className="my-4">Basic Data Visualization</p>
            <p className="my-4 line-through">Advanced Data Visualization</p>
            <p className="my-4">Email Notification</p>
            <p className="my-4 line-through">Export Data</p>
            <p className="my-4">Support</p>
          </div>
          <div>
            <Link
              to="/login"
              className="btn-purple border-2 border-white mt-8 w-fit mx-auto"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="bg-white h-fit rounded-md px-5 py-10 my-5 hover:mt-0 duration-300 border border-purple-100 shadow-2xl shadow-purple-200 text-center">
          <p className="text-2xl font-semibold">Starter</p>
          <span className="h-1.5 w-10 mt-1 mb-3 mx-auto bg-purple-500 block rounded"></span>
          <div className="flex font-semibold justify-center my-10 gap-1">
            <p className="text-2xl self-start">$</p>
            <p className="text-7xl self-center">10</p>
            <p className="self-end pb-1">/month</p>
          </div>
          <div>
            <p className="my-4">10 Vacancy Post</p>
            <p className="my-4">20 Members</p>
            <p className="my-4">2 Groups</p>
            <p className="my-4">6 Month Data Storage</p>
            <p className="my-4">Basic Data Visualization</p>
            <p className="my-4">Advanced Data Visualization</p>
            <p className="my-4">Email Notification</p>
            <p className="my-4">Export Data</p>
            <p className="my-4">Support</p>
          </div>
          <div>
            <Link to="/login" className="btn-purple mt-8 w-fit mx-auto">
              Sign Up
            </Link>
          </div>
        </div>

        <div className="bg-white h-fit rounded-md px-5 py-10 my-5 hover:mt-0 duration-300 border border-purple-100 shadow-2xl shadow-purple-200 text-center">
          <p className="text-2xl font-semibold">Pro</p>
          <span className="h-1.5 w-10 mt-1 mb-3 mx-auto bg-purple-500 block rounded"></span>
          <div className="flex font-semibold justify-center my-10 gap-1">
            <p className="text-2xl self-start">$</p>
            <p className="text-7xl self-center">50</p>
            <p className="self-end pb-1">/month</p>
          </div>
          <div>
            <p className="my-4">Unlimited Vacancy Post</p>
            <p className="my-4">200 Members</p>
            <p className="my-4">10 Group</p>
            <p className="my-4">1 Year Data Storage</p>
            <p className="my-4">Basic Data Visualization</p>
            <p className="my-4">Advanced Data Visualization</p>
            <p className="my-4">Email Notification</p>
            <p className="my-4">Export Data</p>
            <p className="my-4">Priority Support</p>
          </div>
          <div>
            <Link to="/login" className="btn-purple mt-8 w-fit mx-auto">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
