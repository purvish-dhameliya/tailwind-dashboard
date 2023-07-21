import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-[85rem]">
          <Header />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
