import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  return (
    <div className="app">
      <Sidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <Content activeComponent={activeComponent} />
    </div>
  );
};

export default App;
