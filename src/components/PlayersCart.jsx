import React from 'react';

const PlayersCart = ({ player }) => {
  const {
    // playerId,
    name,
    country,
    image,
    role,
    battingType,
    bowlingType,
    biddingPrice
  } = player;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 transition-transform hover:scale-105 duration-300">
      <div className="flex flex-col ">
        <img
          src={image}
          alt={name}
          className=" h-36 object-cover mb-4"
        />
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mb-1">{country}</p>
        <span className="text-sm font-medium text-blue-500 mb-1">{role}</span>
        <div className=" text-gray-600 text-sm mt-2">
          <p>Batting: {battingType}</p>
          <p>Bowling: {bowlingType}</p>
        </div>
        <p className="text-lg font-semibold text-green-600 mt-3">
          Price: {biddingPrice} coins
        </p>
        <button className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full">
          Choose
        </button>
      </div>
    </div>
  );
};

export default PlayersCart;
