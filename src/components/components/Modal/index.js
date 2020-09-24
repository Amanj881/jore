import React from "react";
import { Transition } from "@tailwindui/react";

function Modal({ show, ...props }) {
  return (
    <>
      {show && (
        <div className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center z-50">
          <Transition
            show={show}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="fixed inset-0 transition-opacity"
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </Transition>

          <Transition
            show={show}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div>{props.children}</div>
            </div>
          </Transition>
        </div>
      )}
    </>
  );
}

export default Modal;
