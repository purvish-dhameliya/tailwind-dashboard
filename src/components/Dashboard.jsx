import React from "react";
import DashboardGridState from "./DashboardGridState";
import Transaction from "./Transaction";
import Orders from "./Orders";
import Products from "./Products";
import BuyerProfilePieChart from "./BuyerProfilePieChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <DashboardGridState />
      <div className="flex flex-row gap-4 m-4 pichartcss">
        <Transaction />
        <BuyerProfilePieChart />
      </div>
      <div className="flex flex-row  gap-4 m-4">
        <Products /> 
        <Orders />
      </div>
    </div>
  );
};

export default Dashboard;
