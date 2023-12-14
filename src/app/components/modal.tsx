import React from "react";
import { MdClose } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

interface IModal {
  setIsOpen: (value: boolean) => void;
  children: React.ReactNode;
}
const Modal: React.FC<IModal> = ({ setIsOpen, children }) => {
  return (
    <>
      <div
        className="flex items-center justify-center w-screen h-screen fixed top-0 bottom-0 left-0 before:block before:absolute before:-inset-1 before:backdrop-filter before:backdrop-blur-sm z-10"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(false);
        }}
      >
        <div
          className="w-[90%] max-w-[450px] min-h-[200px] max-h-[740px] bg-accent_fff rounded p-6 z-50"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex items-center jusitfy-between w-full pointer"></div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;

//
