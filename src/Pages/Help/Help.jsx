import React from "react";
import "./Help.style.scss";
import SideBar from "../../Components/Sidebar/Sidebar";
import MainContent from "../../Components/MainContent/MainContent";
export default function Help() {
  return (
    <div className="help-container">
      <SideBar showHomeBtn={true} />
      <MainContent bgcolor={"#fff"}>
        <div className="inner-help-container">
          <h1>Help stuff here</h1>
        </div>
      </MainContent>
    </div>
  );
}
