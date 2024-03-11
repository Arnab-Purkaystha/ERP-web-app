import React from "react";
import { Chart } from "react-google-charts";
//This graph is taken by react-google-charts
//Read this for more knowledge https://www.react-google-charts.com/
const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

const options = {
  isStacked: true,
  height: 400,
  legend: { position: "top", maxLines: 3 },
  vAxis: { minValue: 0 },
  title: "Sales VS Expense",
  titleTextStyle: {
    color: "black", // You can set the color as per your design
    fontSize: 18,
    bold: true,
    italic: false,
    textAlign: "center", // Align the title to the center
  },
};

const Graph = () => {
  return (
    <div style={{
    backgroundColor: '#fff'}}>
       <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
      
    />
    
    </div>
   
  );
}

export default Graph;
