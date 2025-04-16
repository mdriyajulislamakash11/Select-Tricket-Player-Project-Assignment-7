import React from 'react';

const SelectedCard = ({ player, handleDelete }) => {
  const {
    playerId,
    name,
    country,
    image,
    role,
    battingType,
    bowlingType,
    biddingPrice,
  } = player;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full border object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{country}</p>
          <p className="text-sm text-gray-700">Role: {role}</p>
          <p className="text-sm text-gray-700">
            Batting: {battingType} | Bowling: {bowlingType}
          </p>
          <p className="text-sm font-semibold text-red-500">
            Price: {biddingPrice} coins
          </p>
        </div>
      </div>
      <button
        onClick={() => handleDelete(playerId)}
        className="text-white bg-red-500 hover:bg-red-600 px-4 py-1 rounded-full text-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default SelectedCard;
