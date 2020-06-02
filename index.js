import React, { useEffect, useState, useRef } from "react";
import { render } from "react-dom";
import Hello from "./components/Hello";
import Navigation from "./components/Navigation";
import * as pages from "./components/pages";
import "./style.css";

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

const activeStyle = {
  background: "hotpink",
  color: "white"
};

const App = () => {
  const [message, setMessage] = useState("I'm in container under fixed navigation.");
  const [activeId, setActiveId] = useState(null);
  const [activeNavOption, setActiveNavOption] = useState("home");
  const [navigationHeight, setNavigationHeight] = useState(undefined);
  const navigation = React.createRef();

  useEffect(() => {
    setNavigationHeight(navigation.current.offsetHeight);
  }, []);

  const pageContent = () => {
    switch (activeNavOption) {
      case "home":
        return <pages.Home />;
        break;
      case "about":
        return <pages.About />;
        break;
      case "contact":
        return <pages.Contact />;
        break;
      default:
        return;
    }
  };

  const handleClick = id => () => {
    const activeElement = textData.find(item => item.id === id);

    activeElement && setActiveId(id);
    console.log(activeElement.id);
  };

  const handleNavOptionClick = event => {
    const navOptionName = event.target.getAttribute("data-name");
    setActiveNavOption(navOptionName);
  };

  return (
    <>
      <Navigation
        ref={navigation}
        currentOption={activeNavOption}
        handleNavOptionClick={handleNavOptionClick}
      />
      <div style={{ marginTop: `${navigationHeight + 20}px` }}>
        <Hello message={message} />
        <main>{pageContent()}</main>
      </div>
    </>
  );
};

render(<App />, document.getElementById("root"));
