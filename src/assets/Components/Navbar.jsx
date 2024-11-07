import logo from "../../assets/logo.png";
import coin from "../../assets/images.png";

const Navbar = ({ coins }) => {
  return (
    <div className="pb-8 sticky top-0 left-0 ">
      <div className="flex justify-between items-center bg-base-100  ">
        <div className="flex-1 ">
          <div className="dropdown">
            <div className="flex items-center">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <div className="lg:hidden">
                <img className="w-[72px] h-[72px]" src={logo} alt="" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="font-soora text-[#131313B3] text-lg">
                <a>Home</a>
              </li>

              <li className="font-soora text-[#131313B3] text-lg">
                <a> Fixture</a>
              </li>

              <li className="font-soora text-[#131313B3] text-lg">
                <a> Teams</a>
              </li>

              <li className="font-soora text-[#131313B3] text-lg">
                <a> Schedules</a>
              </li>
            </ul>
          </div>
          <img className="hidden lg:flex w-[72px] h-[72px]" src={logo} alt="" />
        </div>
        <div className=" hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1">
            <li className="font-soora text-lg">
              <a>Home</a>
            </li>

            <li className="font-soora text-[#131313B3] text-lg">
              <a> Fixture</a>
            </li>

            <li className="font-soora text-[#131313B3] text-lg">
              <a> Teams</a>
            </li>

            <li className="font-soora text-[#131313B3] text-lg">
              <a> Schedules</a>
            </li>
            <li className="font-soora text-[#131313B3] text-lg">
              <a> Schedules</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center px-5 py-2 border-2 rounded-xl">
          <div className="flex justify-around gap-2 items-center">
            <p className="font-soora text-[#131313B3]  text-lg rounded-lg shadow-sm">
              {coins} coin
            </p>
            <img className="w-6 h-6" src={coin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
