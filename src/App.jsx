import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Toggle from "./components/Toggle";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    state: "cart",
  });
  const [addCoin, srtAddCoin] = useState(0);
  const [Selected, setSelected] = useState([]);


  const handleSelectedCard = (card) => {
    if (addCoin > 0) {

      const plyarSelect = Selected.find((p) => p.playerId === card.playerId);

      if(!plyarSelect){
        setSelected([...Selected, card]);
      }else(
        alert("age thekei ase")
      )

    } else {
      alert("age Coin add koro");
    }
  };

  const handleFreeCoinClim = (coin) => {
    const addMoney = coin + 1000;
    srtAddCoin(addMoney);
  };

  const hanleStateButton = (state) => {
    if (state === "cart") {
      setIsActive({
        cart: true,
        state: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        state: "about",
      });
    }
  };

  return (
    <>
      <section className="w-11/12 mx-auto">
        <Header addCoin={addCoin} />
        <Banner handleFreeCoinClim={handleFreeCoinClim} addCoin={addCoin} />

        <Toggle
          hanleStateButton={hanleStateButton}
          isActive={isActive}
          handleSelectedCard={handleSelectedCard}
          Selected={Selected}
        />
      </section>
    </>
  );
}

export default App;
