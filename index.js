import React, { useEffect, useState, useRef, useCallback } from "react";
import { render } from "react-dom";
import Hello from "./components/Hello";
import Navigation from "./components/Navigation";
import { About, Contact, Home } from "./components/pages";
import "./style.css";

const App = () => {
  const [activeNavOption, setActiveNavOption] = useState("home");
  const [navigationHeight, setNavigationHeight] = useState(undefined);
  const navigation = React.createRef();

  useEffect(() => {
    setNavigationHeight(navigation.current.offsetHeight);
  }, []);

  const pageContent = () => {
    switch (activeNavOption) {
      case "home":
        return <Home />;
        break;
      case "about":
        return <About />;
        break;
      case "contact":
        return <Contact />;
        break;
      default:
        return;
    }
  };

  const handleNavOptionClick = useCallback(
    event => {
      console.log('I was called');
      const navOptionName = event.target.getAttribute("data-name");
      setActiveNavOption(navOptionName);
  },
  [activeNavOption]
  );

  return (
    <>
      <Navigation
        ref={navigation}
        currentOption={activeNavOption}
        handleNavOptionClick={handleNavOptionClick}
      />
      <div style={{ marginTop: `${navigationHeight + 20}px` }}>
        <main>{pageContent()}</main>
      </div>
    </>
  );
};

render(<App />, document.getElementById("root"));
