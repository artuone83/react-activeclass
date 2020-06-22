import React, { useState } from "react";
import ActiveClass from "../ActiveClass";

const textData = [
  {
    id: 1,
    text: "Yes! I'm active 💪"
  },
  {
    id: 2,
    text: "My turn now 🤠"
  },
  {
    id: 3,
    text: "Thanks for activating 😘"
  }
];

const Home = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = id => () => {
    const activeElement = textData.find(item => item.id === id);

    activeElement && setActiveId(id);
    console.log(activeElement.id);
  };

  return (
    <div>
      <h2>Hello from Home.js</h2>
      <ActiveClass
        data={textData}
        onClick={handleClick}
        activeId={activeId} />
    </div>
  );
};

export default Home;
