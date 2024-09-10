import React, { useState, useEffect } from "react";
import FinanceOverview from "./sections/FinanceOverview";
import TrackRecord from "./sections/TrackRecord";
import { Add } from "@mui/icons-material";
import AddRecord from "./modals/AddRecord";

const Records = (props) => {
  const { userRecords, setUserRecords } = props;

  const [showModal, setShowModal] = useState(false);

  const handleAddIncome = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="records">
      <FinanceOverview userRecords={userRecords} />
      <div className="add-record" onClick={() => handleAddIncome()}>
        <Add style={{ fontSize: "30px" }} />
        <h2>Add Income/Expenditures</h2>
      </div>
      <TrackRecord userRecords={userRecords} />

      {showModal && (
        <AddRecord
          showModal={showModal}
          setShowModal={setShowModal}
          userRecords={userRecords}
          setUserRecords={setUserRecords}
        />
      )}
    </div>
  );
};

export default Records;
