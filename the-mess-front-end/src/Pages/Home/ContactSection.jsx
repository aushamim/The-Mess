const ContactSection = () => {
  return (
    <div
      id="contact-us"
      className="min-h-screen bg-[url(/assets/images/contact.png)] py-16 xl:py-20 flex flex-col justify-center"
    >
      <div className="px-8 xl:px-60 xl:mb-10 text-center">
        <h1 className="text-4xl xl:text-5xl font-semibold uppercase">
          Contact Us
        </h1>
        <span className="h-1.5 w-36 mt-1 mx-auto bg-purple-500 block rounded"></span>
      </div>

      <div className="mt-10 px-8 xl:px-60 grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div>
          <form className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Type your name here"
                className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder="Type your email here"
                className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
                required
              />
            </label>
            <label className="form-control xl:col-span-2 w-full">
              <div className="label">
                <span className="label-text">Message</span>
              </div>
              <textarea
                className="textarea textarea-bordered py-3 text-base rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
                placeholder="Type your message here"
                rows={8}
                required
              ></textarea>
            </label>
            <div className="xl:col-span-2">
              <input
                type="submit"
                value="Send"
                className="btn-purple ml-auto mt-5 !mb-0 !px-10"
              />
            </div>
          </form>
        </div>

        <div className="pt-8 grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div className="flex flex-col justify-between gap-5">
            <div className="bg-white rounded-md p-5 shadow-2xl shadow-purple-200 border border-purple-200 hover:border-purple-400 duration-300">
              <p className="text-xl text-purple-600 font-semibold mb-3">
                Email:
              </p>
              <p className="text-xl">au.shamim0@gmail.com</p>
            </div>
            <div className="bg-white rounded-md p-5 shadow-2xl shadow-purple-200 border border-purple-200 hover:border-purple-400 duration-300">
              <p className="text-xl text-purple-600 font-semibold mb-3">
                Phone:
              </p>
              <p className="text-xl">01234567890</p>
            </div>
            <div className="bg-white rounded-md p-5 shadow-2xl shadow-purple-200 border border-purple-200 hover:border-purple-400 duration-300">
              <p className="text-xl text-purple-600 font-semibold mb-3">
                Address:
              </p>
              <p className="text-xl">
                8th Floor, 2 Bir Uttam AK Khandakar Road, Dhaka 1212
              </p>
            </div>
          </div>
          <div className="bg-white rounded-md p-2 shadow-2xl shadow-purple-200 border border-purple-200 hover:border-purple-400 duration-300 min-h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0411938923253!2d90.39749967618602!3d23.781547387578343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c769c6633a2f%3A0xbb3979a7e02a8c90!2sBrain%20Station%2023!5e0!3m2!1sen!2sbd!4v1717615434685!5m2!1sen!2sbd"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-md "
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
