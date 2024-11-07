// eslint-disable-next-line react/prop-types
import { FaRegFlag } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { BiCricketBall } from "react-icons/bi";

const Card = ({ player, playerSelect, selectPlayer }) => {
  const { playerId, name, country, image, biddingPrice, ...rest } = player;
  const { state, batting, bowling } = rest.role;

  return (
    <div className="border p-6 flex-col rounded-lg ">
      <img src={image} className="rounded-lg w-full h-[300px] " alt="" />
      <div className="my-4 flex gap-2 items-center">
        <img src={image} className="w-9 h-9 rounded-full" alt="" />
        <p className="text-black text-lg font-soora font-bold">{name}</p>
      </div>
      <div className="my-4 flex justify-between">
        <div className="text-gray-500 flex gap-2 items-center">
          <FaRegFlag />
          <p>{country}</p>
        </div>
        <div className="rounded-lg bg-gray-200 px-2 py-1">
          <h1 className="text-gray-600">{state}</h1>
        </div>
      </div>
      <hr />
      <p className="font-soora font-bold mt-1">Rating</p>
      <div className=" my-4 flex justify-between text-sm  font-soora  text-center font-semi-bold">
        <p className="flex items-center">
          <GiCricketBat /> {batting}
        </p>
        <p className="flex items-center">
          <BiCricketBall />
          {bowling}
        </p>
      </div>
      <div className="flex justify-between items-center text-sm ">
        <p className="font-soora font-semibold">Price: ${biddingPrice}</p>
        <button
          onClick={() => {
            selectPlayer(player);
          }}
          className="p-2 border rounded-xl hover:bg-[#E7FE29] font-soora"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Card;
