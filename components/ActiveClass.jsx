import React from "react";

const activeStyle = {
  background: "hotpink",
  color: "white"
};

const ActiveClass = ({ data, onClick, activeId }) => {
  return data.map(({ id, text }) => {
    return (
      <p
        style={id === activeId ? activeStyle : {}}
        key={id}
        onClick={onClick(id)}
      >
        {id === activeId ? text : "Activate me, please"}
      </p>
    );
  });
};

export default ActiveClass;
