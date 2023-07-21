import React from "react";
import { NavLink } from "react-router-dom";
import {
  DASHBOARD_SIDEBAR_NAV_TOP as nav,
  DASHBOARD_SIDEBAR_NAV_BOTTOM as bottom_nav,
} from "../lib/navigation";
import { HiOutlineCurrencyPound } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="bg-neutral-900 w-72 p-2 flex flex-col text-white justify-between">
      {/* Sidebar Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-300 rounded-3xl my-4 sm:my-8">
        <HiOutlineCurrencyPound size={30} className="text-lime-950" />
        <span className="text-zinc-950 font-bold text-xl sm:hidden ">
          Dashboard
        </span>
      </div>
      {/* Sidebar Content */}
      <div className="flex-1 flex flex-col">
        {nav.map((item) => (
          <NavLink
            key={item.key}
            to={item.path}
            className="flex items-center gap-3 m-3 p-2 sm:p-1 sm:rounded-lg hover:bg-slate-300 hover:animate-pulse"
          >
            <span className="text-xl flex items-center">{item.icon}</span>
            <span className="text-xl sm:hidden md:block">{item.label}</span>
          </NavLink>
        ))}
      </div>
      {/* Sidebar Bottom */}
      <div className="flex flex-col">
        {bottom_nav.map((item) => (
          <NavLink
            key={item.key}
            to={item.path}
            className="flex items-center gap-3 m-3 p-2 sm:p-1 sm:rounded-lg hover:bg-slate-300 hover:animate-pulse bg-slate-700 text-white justify-items-center text-center"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xl sm:block">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
