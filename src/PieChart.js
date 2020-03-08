import React from "react";
import ApexCharts from 'react-apexcharts'

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  }

  render() {
    return (
      <ApexCharts
        options={this.state.options}
        series={this.state.series}
        width="100%"
        height="100%"
        type="donut"
      />
    );
  }
}

export default PieChart;
