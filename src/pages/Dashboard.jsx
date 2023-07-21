import React from "react";
import DashboardGridState from "../components/DashboardGridState";
import Transaction from "../components/Transaction";
import Orders from "../components/Orders";
import Products from "../components/Products";
import BuyerProfilePieChart from '../components/BuyerProfilePieChart'

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
