import React, { useState } from "react";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  DirectionsBus,
  Fastfood,
  Money,
} from "@mui/icons-material";
import FinanceOverview from "./sections/FinanceOverview.jsx";
import TrackRecord from "./sections/TrackRecord.jsx";

const Dashboard = (props) => {
  const { activeComponent, userRecords, setUserRecords } = props;
  const [showReminder, setShowReminder] = useState(true);

  return (
    <div className="dashboard">
      <FinanceOverview userRecords={userRecords} />

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
                  <p>Invest in yourself</p>
                </div>
              </li>
              <li className="dashboard-reminder-text">
                <div>
                  <h3>2</h3>
                </div>
                <p>Buy your needs and think twice on your wants</p>
              </li>
              <li className="dashboard-reminder-text">
                <div>
                  <h3>3</h3>
                </div>
                <p>
                  Financial journaling is the best way to reflect on your
                  financial management
                </p>
              </li>
            </ol>
          </div>
        )}
      </div>
      <TrackRecord userRecords={userRecords} />
    </div>
  );
};

export default Dashboard;
