import logo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="bg-black pt-60 pb-20">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-center mt-8">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col items-center gap-6 mt-10 lg:flex-row justify-between lg:mt-24">
          <div className="text-center md:text-left">
            <h1 className="font-soora font-bold mb-4 text-white">About Us</h1>
            <p className="text-gray-500 font-soora">
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers
            </p>
          </div>
          <div>
            <h1 className="font-soora font-bold mb-4 text-white">
              Quick Links
            </h1>
            <ul className="disc">
              <li className="cursor-pointer list-disc ml-6 text-gray-500">
                Home
              </li>
              <li className="cursor-pointer list-disc ml-6 text-gray-500">
                Services
              </li>
              <li className="cursor-pointer list-disc ml-6 text-gray-500">
                About
              </li>
              <li className="cursor-pointer list-disc ml-6 text-gray-500">
                Contact
              </li>
            </ul>
          </div>
          <div className="text-center space-y-4">
            <h1 className="font-soora font-bold mb-4 text-white">Subscribe</h1>
            <p className="text-gray-500 font-soora">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex ">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
              />
              <button className="btn btn-warning">Subscribe</button>
            </div>
          </div>
        </div>
        <hr className="bg-gray-600 mt-10" />
        <div className="mt-10 flex justify-center">
          <h1 className="text-gray-500 font-soora">
            @2024 Anisul Haque All rights Reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
