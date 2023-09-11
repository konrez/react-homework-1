import React from "react";

const Tab = ({ label, isSelected, onClick }) => {
  return (
    <button
      className={`tab-button ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;
