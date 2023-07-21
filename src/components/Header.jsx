import React, { Fragment } from "react";
import { HiOutlineAnnotation } from "react-icons/hi";
import { Menu, Popover, Transition } from "@headlessui/react";
import { SiCoinmarketcap } from "react-icons/si";
import { TbBellRingingFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-4 h-16 ">
      <div className="p-4 justify-items-center">
        <SiCoinmarketcap size={36} className="text-green-900" />
      </div>
      <div className="relative">
        {/* <HiOutlineSearch size={"1rem"} className="absolute top-1/2 -translate-y-1/2 "/> */}
        <input
          type="text"
          placeholder="Search..."
          className="w-60  px-4 focus: outline-none border-b-2 font-bold border-slate-500"
        />
      </div>
      <div className="flex items-center justify-items-center mr-2 gap-1">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-3xl px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <HiOutlineAnnotation
                  size={24}
                  className="text-gray-500 hover:cursor-pointer  hover:text-gray-950"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="origin-top-right absolute right-8 mt-2 w-60 rounded-sm shadow md bg-white  ring-opacity-5 focus:outline-none">
                  <div className="overflow-hidden rounded-lg shadow-lg  ">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      <p>Message</p>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-3xl py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2
                 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <TbBellRingingFilled
                  size={24}
                  className="hover:cursor-pointer text-gray-500 hover:text-gray-950"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="origin-top-right absolute right-8 mt-2 w-60 rounded-sm bg-white fcus:outline-none">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      <p>Notification</p>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-3xl py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              ></Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="origin-top-right absolute right-8 mt-2 w-48 rounded-sm shadowmd p-1 bg-white ring-1 ring-opacity-5 focus:outline-none">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      <p>Message</p>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Menu as="div" className="relative inline-block text-center">
          <Menu.Button className="ml-1">
            <span className="sr-only">open menu</span>
            <div
              className="h-8 w-8 rounded-full bg-sky-300 bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/80x80?face")',
              }}
            >
              <span className="sr-only">Purvish dhameliya</span>
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-8 mt-2 w-60  rounded-sm bg-white fcus:outline-none">
              <div className="py-2 rounded-xl flex flex-col active:outline-none shadow md text-gray-950 ">
                <Menu.Item>
                  {() => (
                    <button
                      className=""
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      Your Profile
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className=""
                      onClick={() => {
                        navigate("/setting");
                      }}
                    >
                      Settings
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className=""
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Sign Out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
