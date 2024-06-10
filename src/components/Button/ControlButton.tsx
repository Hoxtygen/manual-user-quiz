import clsx from "clsx";
import React, { ReactNode } from "react";

type NextButtonProps = {
  children: ReactNode;
  clickHandler: () => void;
  disabled?: boolean;
  className?: string;
  selected?: boolean;
};

export default function ControlButton({
  children,
  clickHandler,
  disabled,
  className,
  selected,
}: NextButtonProps) {
  return (
    <button
      onClick={clickHandler}
      disabled={disabled}
      className={clsx(className, selected ? "border border-green-400" : "")}
    >
      {children}
    </button>
  );
}
