import React from "react";
import Dashboard from "./component/Dashboard";
import Records from "./component/Records";
import Chart from "./component/Chart";
import Reflect from "./component/Reflect";
import Settings from "./component/Settings";
import Guide from "./component/Guide";
import Header from "./component/sections/Header";

const Content = (props) => {
  const { activeComponent } = props;
  const setComponent = {
    Dashboard: <Dashboard />,
    Records: <Records />,
    Chart: <Chart />,
    Reflect: <Reflect />,
    Settings: <Settings />,
    Guide: <Guide />,
  };

  return (
    <div className="content-wrapper">
      <div className="content">
        <Header activeComponent={activeComponent} />
        {setComponent[activeComponent]}
      </div>
    </div>
  );
};

export default Content;
