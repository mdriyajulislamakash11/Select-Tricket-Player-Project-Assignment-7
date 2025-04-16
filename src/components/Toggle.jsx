import React from "react";

const Toggle = ({ hanleStateButton, isActive }) => {
  return (
    <div className="my-24 text-right">
      {/* Toggle Button */}
      <div>
        <button
          className={
            isActive.state === "cart"
              ? "btn btn-primary border px-10 border-red-500 mr-7"
              : "btn border border-red-500 px-10 mr-7"
          }
          onClick={() => hanleStateButton("cart")}
        >
          Available
        </button>
        <button
          className={
            isActive.state === "about"
              ? "btn btn-primary border px-10 border-red-500 mr-7"
              : "btn border border-red-500 px-10 mr-7"
          }
          onClick={() => hanleStateButton("about")}
        >
          Selected (0)
        </button>
      </div>
    </div>
  );
};

export default Toggle;
