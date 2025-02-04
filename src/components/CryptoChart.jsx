import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const CryptoChart = () => {
  const priceHistory = useSelector((state) => state.crypto.priceHistory);

  const data = {
    labels: Array(priceHistory.length).fill(""),
    datasets: [
      {
        label: "BTC Price",
        data: priceHistory,
        borderColor: "green",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="crypto-chart">
      <h3>Price Trend</h3>
      <Line data={data} />
    </div>
  );
};

export default CryptoChart;
