import React, { useState } from "react";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  DirectionsBus,
  Fastfood,
  Money,
} from "@mui/icons-material";
import Header from "./sections/Header.jsx";
import FinanceOverview from "./sections/FinanceOverview.jsx";
import TrackRecord from "./sections/TrackRecord.jsx";

const Dashboard = (props) => {
  const { activeComponent } = props;
  const [showReminder, setShowReminder] = useState(true);

  return (
    <div className="dashboard">
      <FinanceOverview />

      <div className="dashboard-chart | margin-bottom-600"></div>

      <div className="dashboard-reminder | margin-bottom-600">
        <div className="dashboard-reminder-title">
          <h2 className=" | fs-500 text-accent2-700">Please be reminded</h2>
          <div
            className="dashboard-reminder-title__show"
            onClick={() => setShowReminder(!showReminder)}
          >
            <h3 className="text-accent-400 fw-semi-bold">
              {showReminder ? "Hide" : "Show"}
            </h3>
            <i className="text-accent-400">
              {showReminder ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </i>
          </div>
        </div>
        {showReminder && (
          <div>
            <ol className="dashboard-reminder-details">
              <li className="dashboard-reminder-text">
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, minima voluptas ipsa consequuntur harum placeat
                    delectus dolore! Expedita, quasi doloremque?
                  </p>
                </div>
              </li>
              <li className="dashboard-reminder-text">
                <div>
                  <h3>2</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, doloremque.
                </p>
              </li>
            </ol>
          </div>
        )}
      </div>
      <TrackRecord />
    </div>
  );
};

export default Dashboard;
