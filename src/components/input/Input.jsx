// input component with a label, input field, type, placeholder and error message
import React from "react";
import "./Input.css";

export const Input = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  errorMessage,
}) => {
  return (
    <div className="input">
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="error">{errorMessage}</p>}
    </div>
  );
};
