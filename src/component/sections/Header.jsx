import React, { useState } from "react";
import { MoreVert, EditCalendar } from "@mui/icons-material";
import axios from "axios";

const Header = (props) => {
  const { activeComponent } = props;

  const handleRefresh = async () => {
    window.location.reload(false);
  };

  const handleDatePicker = () => {
    console.log("Date Range Picker");
  };

  const handleMoreSettings = () => {
    console.log("More Settings");
  };

  return (
    <>
      <div className="content-header | padding-top-600 padding-bottom-600">
        <h1 className=" | fw-semi-bold fs-primary-heading">
          {activeComponent}
        </h1>
        <div className="content-header__settings">
          <div onClick={handleDatePicker} className="content-header__date">
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
          <div onClick={handleMoreSettings} className="content-header__more">
            <MoreVert />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
