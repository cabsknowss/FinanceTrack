import React, { useState } from "react";
import Header from "./sections/Header";
import FinanceOverview from "./sections/FinanceOverview";
import TrackRecord from "./sections/TrackRecord";
import { Add } from "@mui/icons-material";

const Records = () => {
  const [showReminder, setShowReminder] = useState(true);
  return (
    <div className="records">
      <FinanceOverview />
      <TrackRecord />

      <div className="add-record">
        <Add style={{ fontSize: "30px" }} />
        <h2>Add Income/Expenditures</h2>
      </div>
    </div>
  );
};

export default Records;
