/* eslint-disable react/prop-types */
import Available from "./Available";

import Selected from "./Selected";

// eslint-disable-next-line react/prop-types
const CardContainer = ({
  players,
  playerSelect,
  toggle,
  isActive,
  selectPlayer,
  choosePlayer,
  removeplayer,
  add,
}) => {
  console.log(choosePlayer);
  return (
    <div className="mb-60">
      <div className=" flex justify-between my-10 ">
        <div className="text-2xl font-bold text-black font-soora">
          {isActive ? (
            <h1>Available Players</h1>
          ) : (
            <h1>Selected Players ({choosePlayer.length}/6)</h1>
          )}
        </div>
        <div className="rounded-lg border">
          <button
            onClick={() => toggle(true)}
            // className="rounded-tl-lg rounded-bl-lg w-[138px] h-[48px] font-semibold font-soora   text-black  p-1"

            className={`rounded-tl-lg rounded-bl-lg w-[138px] h-[48px] font-semibold font-soora text-black p-1 ${
              isActive ? "bg-[#E7FE29]" : "bg-slate-100"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => toggle(false)}
            className={`rounded-tr-lg rounded-br-lg w-[138px] h-[48px] font-semibold font-soora text-black p-1 ${
              isActive ? "bg-slate-100" : "bg-[#E7FE29]"
            }`}

            // className="rounded-tr-lg rounded-br-lg w-[138px] h-[48px] font-semibold font-soora  text-black  p-1"
          >
            Selected ({choosePlayer.length})
          </button>
        </div>
      </div>

      <div>
        {isActive ? (
          <Available
            selectPlayer={selectPlayer}
            playerSelect={playerSelect}
            players={players}
          ></Available>
        ) : (
          <Selected
            isActive={isActive}
            add={add}
            choosePlayer={choosePlayer}
            removeplayer={removeplayer}
            className={isActive ? "bg-slate-100" : "bg-[#E7FE29]"}
          ></Selected>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
