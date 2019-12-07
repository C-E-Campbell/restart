import React from "react";
import "./Idea.style.scss";
import SideBar from "../../Components/Sidebar/Sidebar";
import MainContent from "../../Components/MainContent/MainContent";
export default function Idea() {
  return (
    <div className="idea-container">
      <SideBar showHomeBtn={true} />
      <MainContent bgcolor={"#fff"}>Idea stuff here</MainContent>
    </div>
  );
}
