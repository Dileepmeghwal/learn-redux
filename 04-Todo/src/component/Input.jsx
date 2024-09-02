import React from "react";

const Input = ({ value, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Add todo..."
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        style={{ padding: "13px 20px", borderRadius: 8, border: 0 }}
      />
    </div>
  );
};

export default Input;
