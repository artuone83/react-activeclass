import React, { useEffect, useState, useRef } from "react";
import { render } from "react-dom";
import Hello from "./components/Hello";
import Navigation from "./components/Navigation";
import * as pages from "./components/pages";
import "./style.css";

const activeStyle = {
  background: "hotpink",
  color: "white"
};

const App = () => {
  const [message, setMessage] = useState("I'm in container under fixed navigation.");
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
