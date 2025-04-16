import React from "react";
import AvailablePlayer from "./AvailablePlayer";
import SelectedPlayer from "./SelectedPlayer";

const Toggle = ({
  hanleStateButton,
  isActive,
  handleSelectedCard,
  Selected,
  handleCartDelet,
}) => {
  return (
    <div>
      {/* Toggle Button */}
      <div className="my-24 text-right">
        <button
          className={
            isActive.state === "cart"
              ? "btn btn-primary border px-10 mr-7"
              : "btn border px-10 mr-7"
          }
          onClick={() => hanleStateButton("cart")}
        >
          Available
        </button>
        <button
          className={
            isActive.state === "about"
              ? "btn btn-primary border px-10 mr-7"
              : "btn border px-10 mr-7"
          }
          onClick={() => hanleStateButton("about")}
        >
          Selected (0)
        </button>
      </div>

      {/* Toggole components */}
      <div>
        {isActive.cart ? (
          <AvailablePlayer handleSelectedCard={handleSelectedCard} />
        ) : (
          <SelectedPlayer Selected={Selected} handleCartDelet={handleCartDelet}/>
        )}
      </div>
    </div>
  );
};

export default Toggle;
