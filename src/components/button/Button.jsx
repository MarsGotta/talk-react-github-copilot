// create a button component
import React from "react";
import "./Button.css";

export const Button = ({ children, onClick, disabled }) => {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {children}
    </button>
  );
};
