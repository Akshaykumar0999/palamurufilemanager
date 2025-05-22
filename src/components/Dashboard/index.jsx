import React from "react";
import Header from "../Header";
import "./index.css";
import NavSection from "../NavSection";

const Dashboard = () => {
  return (
    <div
      className="main-container-card"
    >
      <NavSection />
      <div className="purchase-main-card">
        <Header />
        <main>Dashboard</main>
      </div>
    </div>
  );
};

export default Dashboard;
