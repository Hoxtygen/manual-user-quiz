import React, { ReactNode } from "react";
import ReactModal from "react-modal";
import Image from "next/image";

type OverlayProps = {
  children: ReactNode;
  showModal: boolean;
};
export default function Overlay({ children, showModal }: OverlayProps) {
  return (
    <div className="bg-slate-600">
      <ReactModal
        ariaHideApp={false}
        isOpen={showModal}
        style={customStyles}
        contentLabel="Quiz Modal"
      >
        <Image
          src="/assets/svgs/logo.svg"
          alt="Manual Logo"
          width={40}
          height={40}
        />
        {children}
      </ReactModal>
    </div>
  );
}

const customStyles = {
  content: {
    top: "0%",
    left: "0%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    backgroundColor: "#F3F7F4",
    width: "100%",
    height: "100%",
  },
};
