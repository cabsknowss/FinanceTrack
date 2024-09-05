import React, { useState } from "react";
import { MoreVert, EditCalendar } from "@mui/icons-material";
import axios from "axios";

const Header = (props) => {
  const { activeComponent } = props;

  const [dateClick, setDateClick] = useState(false);
  const [settingsClick, setSettingsClick] = useState(false);

  const [dateRange, setDateRange] = useState("");

  const handleRefresh = async () => {
    console.log("Clicked Refresh");

    try {
      const response = await axios.get("http://localhost:3000/");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="content-header | padding-top-600 padding-bottom-600">
        <h1 className=" | fw-semi-bold fs-primary-heading">
          {activeComponent}
        </h1>
        <div className="content-header__settings">
          <div
            onClick={() => {
              setDateClick(!dateClick);
              console.log(dateClick);
            }}
            className="content-header__date"
          >
            <i>
              <EditCalendar />
            </i>
            <h2 className="fs-300 fw-semi-bold">Today</h2>
          </div>
          <div
            onClick={handleRefresh}
            className="content-header__refresh | fs-300 fw-semi-bold"
          >
            Refresh
          </div>
          <div
            onClick={() => {
              setSettingsClick(!settingsClick);
              console.log(settingsClick);
            }}
            className="content-header__more"
          >
            <MoreVert />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
