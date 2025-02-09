import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
const data = [
  { name: "Screen Time", value: 65, color: "#FF6384" },  // :red_circle: Red
  { name: "Productive Time", value: 35, color: "#36A2EB" } // :large_blue_circle: Blue
];
const ChartComponent = () => {
  return (
    <div className="text-center">
      <h1 className="mt-3 fw-bold">Gen AI</h1>
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={120} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};
export default ChartComponent;
// function createPieChart() {
//   // Placeholder function for creating a pie chart
//   const ctx = document.createElement('canvas');
//   ctx.style.maxWidth = '600px'; // Increase the maximum width
//   ctx.style.maxHeight = '600px'; // Increase the maximum height
//   document.getElementById('piechart').appendChild(ctx);

//   // Example data
//   const data = {
//     labels: ['Sleep', 'Work', 'Leisure'],
//     datasets: [{
//       data: [8, 8, 8],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
//     }]
//   };

//   // Create the pie chart
//   new Chart(ctx, {
//     type: 'pie',
//     data: data,
//     options: {
//       responsive: true,
//       maintainAspectRatio: false
//     }
//   });
// }

// // Call the function to display the placeholder pie chart
// createPieChart();
