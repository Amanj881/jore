import React, { useState } from "react";
import { Transition } from "@tailwindui/react";
import Logo from "../../assets/Logo.svg";

function Sidebar(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Off-canvas menu for mobile */}
      <div className="md:hidden">
        <div className="fixed inset-0 flex z-40">
          <Transition
            show={isOpen}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="fixed inset-0"
          >
            <div className="absolute inset-0 bg-gray-600 opacity-75" />
          </Transition>
          <Transition
            show={isOpen}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-800"
          >
            <div className="absolute top-0 right-0 -mr-14 p-1">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                aria-label="Close sidebar"
              >
                <svg
                  className="h-6 w-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center px-4">
              <img className="h-8 w-auto" src={Logo} alt="Workflow" />
            </div>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="px-2">
                <a
                  href="/"
                  className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-indigo-900 focus:outline-none focus:bg-indigo-700 transition ease-in-out duration-150"
                >
                  <svg
                    className="mr-4 h-6 w-6 text-indigo-400 group-hover:text-indigo-300 group-focus:text-indigo-300 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                    />
                  </svg>
                  Dashboard
                </a>
              </nav>
            </div>
          </Transition>
          <div
            className="flex-shrink-0 w-14 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </div>
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-indigo-800 pt-5 pb-4">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="h-8 w-auto" src={Logo} alt="Workflow" />
          </div>
          <div className="mt-5 h-0 flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 bg-indigo-800">
              <a
                href="/"
                className="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md bg-indigo-900 focus:outline-none focus:bg-indigo-700 transition ease-in-out duration-150"
              >
                <svg
                  className="mr-3 h-6 w-6 text-indigo-400 group-focus:text-indigo-300 transition ease-in-out duration-150"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                  />
                </svg>
                Dashboard
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
