import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,litecoin,cardano,polkadot,stellar,chainlink,uniswap,bitcoin-cash",
        {
          params: {
            limit: 10,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setListOfCoins(response.data);
      });
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Search Coin..."
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="crytoDisplay">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              image={coin.image}
              current_price={coin.current_price}
              symbol={coin.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
