function createPieChart() {
  // Placeholder function for creating a pie chart
  const ctx = document.createElement('canvas');
  ctx.style.maxWidth = '600px'; // Increase the maximum width
  ctx.style.maxHeight = '600px'; // Increase the maximum height
  document.getElementById('piechart').appendChild(ctx);

  // Example data with only two numbers
  const data = {
    labels: ["Screen Time(min)", "Productive Time(min)"], // Two categories
    datasets: [{
      data: [65, 35], // Only two data points
      backgroundColor: ['#FF6384', '#36A2EB'] // Two colors
    }]
  };

  // Create the pie chart
  new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// Call the function to display the placeholder pie chart
createPieChart();
