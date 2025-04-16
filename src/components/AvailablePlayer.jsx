import React, { useEffect, useState } from "react";
import PlayersCart from "./PlayersCart";

const AvailablePlayer = ({ handleSelectedCard }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Available player: {players.length}</h2>

      <div className="grid lg:grid-cols-4 gap-6">
        {players.map((player) => (
          <PlayersCart
            key={player.playerId}
            player={player}
            handleSelectedCard={handleSelectedCard}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayer;
