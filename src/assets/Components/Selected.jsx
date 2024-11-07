/* eslint-disable react/prop-types */

import Available from "./Available";
import SelectPlayer from "./SelectPlayer";

const Selected = ({ choosePlayer, removeplayer, add, isActive }) => {
  return (
    <div>
      <div className="">
        {choosePlayer.map((cp) => (
          <SelectPlayer
            key={cp.playerId}
            removeplayer={removeplayer}
            cp={cp}
          ></SelectPlayer>
        ))}
      </div>

      <div className="p-4">
        <button
          onClick={() => add(true)}
          className="bg-[#E7FE29] rounded-lg px-4 py-2 font-soora font-bold text-xl hover:bg-black hover:text-white"
        >
          {isActive ? <Available></Available> : "Add More Player"}
        </button>
      </div>
    </div>
  );
};

export default Selected;
