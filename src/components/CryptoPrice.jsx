import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePrice } from "../redux/cryptoSlice";

const CryptoPrice = () => {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.crypto.price);

  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(updatePrice(parseFloat(data.p)));
    };

    return () => ws.close();
  }, [dispatch]);

  return (
    <div className="crypto-price">
      <h2>
        BTC/USDT Price:{" "}
        <span style={{ color: "green" }}>{price.toFixed(2)}</span>
      </h2>
    </div>
  );
};

export default CryptoPrice;
