import React, { Component } from "react";
import { Doughnut, Pie, Bar } from "react-chartjs-2";
import axios from "axios";
import "./Chart.scss";
// import MainContent from "../Components/MainContent/MainContent";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campusInfo: {},
      phoenix: null,
      utah: null,
      dallas: null
    };
    this.getCampusData = this.getCampusData.bind(this);
  }
  componentDidMount() {
    this.getCampusData();
  }

  getCampusData() {
    axios.get("/auth/get_campus").then(response => {
      this.setState({ campusInfo: response.data });
    });
  }

  render() {
    return (
      <div className="chart-main">
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
                  // data:
                  backgroundColor: ["#C82233", "#72C934"],
                  hoverBackgroundColor: ["#C82233", "#72C934"]
                }
              ]
            }}
          />
        </div>
      </div>
    );
  }
}
