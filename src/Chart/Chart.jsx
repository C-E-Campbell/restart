import React, { Component } from "react";
import { Doughnut, Pie, Bar } from "react-chartjs-2";
// import MainContent from "../Components/MainContent/MainContent";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allIds: {}
    };
  }

  render() {
    let campusData = this.props.users.campus;
    console.log(campusData);
    return (
      <div
        className="chart"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h6>Campus Ratio</h6>
        <Bar
          data={{
            labels: ["Phoenix", "Utah", "Dallas"],
            datasets: [
              {
                data: { campusData },
                backgroundColor: ["#C82233", "#72C934"],
                hoverBackgroundColor: ["#C82233", "#72C934"]
              }
            ]
          }}
        />
      </div>
    );
  }
}
