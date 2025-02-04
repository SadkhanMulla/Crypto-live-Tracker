import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CryptoPrice from "./components/CryptoPrice";
import CryptoChart from "./components/CryptoChart";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <h1 style={{textAlign:'center', color:'orange', fontSize:'2.8rem', fontWeight:'bold'}}>Dynamic Crypto Data</h1>
      <div className="app">
        <h2>📈 Crypto Live Tracker</h2>
        <CryptoPrice />
        <CryptoChart />
      </div>
    </Provider>
  );
}

export default App;
