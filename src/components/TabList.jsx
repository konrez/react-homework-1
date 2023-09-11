import React, { useState } from "react";

const TabList = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const selectTab = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="tab-list">
      <div className="tabs">
        {children.map((child, index) => {
          return React.cloneElement(child, {
            isSelected: index === selectedTab,
            onClick: () => selectTab(index),
          });
        })}
      </div>
      <div className="tab-content">{children[selectedTab].props.children}</div>
    </div>
  );
};

export default TabList;
