// DashboardGridState.js
import React from "react";
import { IoBagHandle, IoPeople, IoStatsChart } from "react-icons/io5";

const DashboardGridState = () => {
  return (
    <div className="grid custom gap-2  mx-auto my-2" >
      <BoxWrapper classes="box1" >
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $54,232
            </strong>
            <span className="text-sm text-green-500 pl-2">+343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper classes="box2" >
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoStatsChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Expenses
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $3,423
            </strong>
            <span className="text-sm text-green-500 pl-2">-343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper classes="box3" >
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Customers
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              12,313
            </strong>
            <span className="text-sm text-red-500 pl-2">-30</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper classes="box4" >
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <IoStatsChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Orders</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              16,432
            </strong>
            <span className="text-sm text-red-500 pl-2">-43</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardGridState;

const BoxWrapper = ({ children,classes }) => {
  return (
    <div className={`${classes} bg-white rounded-sm p-2 border flex items-center justify-between`}>
      {children}
    </div>
  );
};
