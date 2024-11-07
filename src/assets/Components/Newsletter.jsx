import bgimage from "../../assets/bg-shadow.png";

const Newsletter = () => {
  return (
    <div className=" hidden lg:flex bg-slate-50/40 w-11/12 mx-auto border-2 border-white rounded-xl p-4 absolute -top-40 left-[60px]  ">
      <div
        className="w-full bg-white bg-cover bg-center bg-no-repeat rounded-lg shadow-lg  border border-black"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="flex justify-center items-center flex-col gap-3 pl-[420px] pr-[420px] py-[80px]">
          <h1 className="text-3xl font-soora font-bold ">
            Subscribe to our Newsletter
          </h1>
          <p className="text-xl text-gray-600">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />

            <button className="btn btn-warning">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
