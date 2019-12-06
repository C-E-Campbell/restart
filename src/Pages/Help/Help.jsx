import React from "react";
import "./Help.style.scss";
import SideBar from "../../Components/Sidebar/Sidebar";
import MainContent from "../../Components/MainContent/MainContent";
export default function Help() {
  return (
    <div className="help-container">
      <SideBar />
      <MainContent> Help stuff here</MainContent>
    </div>
  );
}
