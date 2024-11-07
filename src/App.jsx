import Navbar from "./assets/Components/Navbar";
import Banner from "./assets/Components/Banner";
import Footer from "./assets/Components/Footer";
import Newsletter from "./assets/Components/Newsletter";
import CardContainer from "./assets/Components/CardContainer";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [players, setPlayer] = useState([]);

  const [isActive, setActive] = useState(true);

  const toggle = (boolean) => {
    if (boolean) {
      setActive(true);
    } else {
      setActive(boolean);
    }
  };

  useEffect(() => {
    fetch("./playerdata.json")
      .then((res) => res.json())
      .then((data) => setPlayer(data));
  }, []);

  const [coins, setCoins] = useState(0);

  const increaseCoin = (coin) => {
    toast.success("Credit Added to your Account", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setCoins(coins + coin);
  };

  const [choosePlayer, setChoosePlayer] = useState([]);

  const selectPlayer = (player) => {
    const exist = choosePlayer.find((p) => p.playerId === player.playerId);
    if (exist) {
      toast.error("Player already selected", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (choosePlayer.length > 5) {
      toast.error("Cant select more than 6 player", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (coins === 0 || coins < player.biddingPrice) {
      toast.error("Not enough money to buy this player. Claim some credit", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const nPlayer = [...choosePlayer, player];
    toast.success(`Congrates !! ${player.name} is now in your squad`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setChoosePlayer(nPlayer);

    const remainingBalance = coins - player.biddingPrice;
    setCoins(remainingBalance);
  };
  console.log(choosePlayer);

  const removeplayer = (cp) => {
    const d = choosePlayer.filter((c) => c.playerId !== cp.playerId);
    toast.warn("Player removed", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setChoosePlayer(d);
  };

  const add = (boolean) => {
    setActive(boolean);
  };

  return (
    <>
      <div className="">
        <div className="w-11/12 md:w-11/12 mx-auto">
          <Navbar coins={coins}></Navbar>
          <Banner increaseCoin={increaseCoin} coins={coins}></Banner>
          <CardContainer
            add={add}
            choosePlayer={choosePlayer}
            selectPlayer={selectPlayer}
            isActive={isActive}
            toggle={toggle}
            players={players}
            removeplayer={removeplayer}

            // addMore={addMore}
            // add={add}
          ></CardContainer>
        </div>
        <div className="relative">
          <Footer></Footer>
          <Newsletter></Newsletter>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
