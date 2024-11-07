import bgimage from "../../assets/bg-shadow.png";
import banner from "../../assets/banner-main.png";
const Banner = ({ increaseCoin }) => {
  return (
    <div className="bg-black rounded-2xl ">
      <div
        className=" flex justify-center rounded-2xl bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="flex py-10 flex-col items-center gap-5">
          <div>
            <img className="mt-16" src={banner} alt="" />
          </div>

          <p className=" text-white text-3xl text-center md:text-6xl font-soora font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team{" "}
          </p>
          <p className=" text-xl md:text-2xl text-center text-[#FFFFFFB3] font-semibold font-soora">
            Beyond Boundaries Beyond Limits
          </p>
          <div className="border border-[#E7FE29] rounded-lg mb-10 ">
            <button
              onClick={() => {
                increaseCoin(12000000);
              }}
              className="bg-[#E7FE29] hover:bg-black hover:text-white  font-soora p-2 rounded-lg border-2 border-black "
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
