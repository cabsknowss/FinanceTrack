import React, { useState } from "react";
import Header from "./sections/Header";
import FinanceOverview from "./sections/FinanceOverview";
import TrackRecord from "./sections/TrackRecord";
import { Add } from "@mui/icons-material";
import AddRecord from "./modals/AddRecord";

const Records = () => {
  const [showReminder, setShowReminder] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleAddIncome = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="records">
      <FinanceOverview />
      <TrackRecord />

      <div className="add-record" onClick={() => handleAddIncome()}>
        <Add style={{ fontSize: "30px" }} />
        <h2>Add Income/Expenditures</h2>
      </div>

      {showModal && (
        <AddRecord showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default Records;
