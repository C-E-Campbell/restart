import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

import BasicHeader from "../Components/BasicHeader/BasicHeader";
import "./Chart.scss";
// import MainContent from "../Components/MainContent/MainContent";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campusInfo: {},
      phoenix: 0,
      lehi: 0,
      dallas: 0
    };
    this.getCampusData = this.getCampusData.bind(this);
  }
  componentDidMount() {
    this.getCampusData();
  }

  getCampusData() {
    axios.get("/auth/get_campus").then(response => {
      response.data.forEach((campus, i) => {
        if (campus.campus === "Phoenix") {
          let city1 = this.state.phoenix;
          city1 += 1;
          this.setState({ phoenix: city1 });
        } else if (campus.campus === "Dallas") {
          let city2 = this.state.dallas;
          city2 += 1;
          this.setState({ dallas: city2 });
        } else if (campus.campus === "Lehi") {
          let city3 = this.state.lehi;
          city3 += 1;
          this.setState({ lehi: city3 });
        }
      });
    });
  }

  render() {
    // console.log(this.state.campusInfo);
    // const { phoenix, dallas, utah } = this.state;
    // const { campusInfo } = this.state;

    // console.log(mappedCampus);
    return (
      <div className="chart-main">
        <BasicHeader />

        <div className="chart-blurb">
          <div>
            This is Community over Competition, but lets see which campus can
            have more registered users.
          </div>
        </div>
        <div className="smoke">
          <div className="chart-title">
            <h6 className="campus-label">Registered Users by Campus</h6>
          </div>
          <div className="chart-box">
            <Bar
              height={100}
              options={{
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        suggestedMin: 1,
                        suggestedMax: 7
                      }
                    }
                  ]
                }
              }}
              className="canvas"
              data={{
                labels: ["Phoenix", "Dallas", "Utah"],

                datasets: [
                  {
                    label: "Number of Users",
                    data: [
                      this.state.phoenix,
                      this.state.dallas,
                      this.state.lehi,
                      0
                    ],

                    backgroundColor: ["#37ffff", "#2d85a8", "#75b6ea"],
                    hoverBackgroundColor: ["#6ba3d1", "#659fa3", "#79f7d5"]
                  }
                ]
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
