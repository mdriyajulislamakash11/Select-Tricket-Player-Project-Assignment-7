import React from "react";
import Logo from "../assets/Images/logo.png";

const Header = ({addCoin}) => {
  
  return (
    <div className="flex justify-between items-center my-10 ">
      {/* navbar logo */}
      <div>
        <img className="w-14" src={Logo} alt="" />
      </div>

      {/* banner menu */}
      <div className="flex justify-center items-center">
        <div>
          <ul className="flex gap-6">
            <li className="">Home</li>
            <li className="">Fixture</li>
            <li className="">Teams</li>
            <li className="">Schedules</li>
          </ul>
        </div>
        {/* show add coin button */}
        <div className="ml-10">
          <button className="btn font-bold">{addCoin} Coin</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
