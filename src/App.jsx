import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Toggle from "./components/Toggle";
import { Toaster, toast } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    state: "cart",
  });
  const [addCoin, setAddCoin] = useState(0);
  const [Selected, setSelected] = useState([]);

  const handleSelectedCard = (card) => {
    if (addCoin >= card.biddingPrice) {
      const alreadySelected = Selected.find(
        (p) => p.playerId === card.playerId
      );

      if (!alreadySelected) {
        const newPlayer = [...Selected, card];
        setSelected(newPlayer);
        setAddCoin(addCoin - card.biddingPrice);
        toast.success("Player added successfully!");
      } else {
        toast.error("This player has already been selected!");
      }
    } else {
      toast.error("Not enough coins! Please claim coins first.");

    }
  };

  const handleCartDelet = (id, price) => {
    const deletedCard = Selected.filter((p) => p.playerId !== id);
    setSelected(deletedCard);
    setAddCoin(addCoin + price);
    toast.success("Player removed. Coin refunded!");
  };

  const handleFreeCoinClim = () => {
    const addMoney = addCoin + 1000;
    setAddCoin(addMoney);
    toast("🎉 Coin added successfully!");
  };

  const hanleStateButton = (state) => {
    setIsActive({
      cart: state === "cart",
      state: state,
    });
  };

  return (
    <>
      <section className="w-11/12 mx-auto">
        <Toaster position="top-right" />
        <Header addCoin={addCoin} />
        <Banner handleFreeCoinClim={handleFreeCoinClim} addCoin={addCoin} />
        <Toggle
          hanleStateButton={hanleStateButton}
          isActive={isActive}
          handleSelectedCard={handleSelectedCard}
          Selected={Selected}
          handleCartDelet={handleCartDelet}
        />

      </section>
        <Footer />
    </>
  );
}

export default App;
