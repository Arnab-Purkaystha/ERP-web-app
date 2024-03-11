import React from "react";
import { Chart } from "react-google-charts";
//This Chart is taken by react-google-charts
//Read this for more knowledge https://www.react-google-charts.com/
const data = [
  ["ABC", "Inventory (in Lakhs)"],
  ["BCD", 5.85],
  ["EFG", 1.66],
  ["HIJ", 0.316],
  ["LMN", 0.0791],
];

const options = {
  legend: "none",
  pieSliceText: "label",
  title: "Inventory Pie Chart",
  titleTextStyle: {
    color: "black", // You can set the color as per your design
    fontSize: 18,
    bold: true,
    italic: false,
    textAlign: "center", // Align the title to the center
  },
  pieStartAngle: 100,
};


const PieChart = () => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default PieChart;
