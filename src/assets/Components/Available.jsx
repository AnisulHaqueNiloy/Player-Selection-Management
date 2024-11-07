/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import Card from "./Card";

const Available = ({ players, playerSelect, selectPlayer }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {players.map((player) => (
          <Card
            key={player.playerId}
            selectPlayer={selectPlayer}
            playerSelect={playerSelect}
            player={player}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Available;
