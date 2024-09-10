import React, { useEffect, useState } from "react";
import {
  Fastfood,
  Money,
  Work,
  DirectionsBus,
  DeveloperMode,
  Group,
  ShowChart,
  ShoppingCart,
} from "@mui/icons-material";

const TrackRecord = (props) => {
  const { userRecords } = props;

  const dataIcon = {
    Restaurant: <Fastfood />,
    Freelancing: <DeveloperMode />,
    Salary: <Work />,
    Transportation: <DirectionsBus />,
    Contribution: <Group />,
    Income: <Money />,
    Investment: <ShowChart />,
    Shopping: <ShoppingCart />,
  };

  const computeBalance = (index) => {
    let amount = 0;
    if (index === 0) {
      return userRecords[index].amount;
    }

    for (let i = 0; i <= index; i++) {
      userRecords[i].account === "Income"
        ? (amount = amount + userRecords[i].amount)
        : (amount = amount - userRecords[i].amount);
    }
    return amount;
  };
  return (
    <>
      <div className="track-records">
        <h2 className="fw-semi-bold fs-500 padding-bottom-500">Your Account</h2>

        {userRecords.map((rec, index) => (
          <div key={index} className="track-record-list | margin-bottom-400">
            <div className="track-record-list__details">
              <i className="flex-center bg-neutral-400 padding-300 max-radius">
                {dataIcon[rec.category]}
              </i>
              <div>
                <h2 className="fw-bold">{rec.description}</h2>
                <p className="fs-200 text-neutral-700">{rec.category}</p>
              </div>
            </div>
            <div className="track-record-list__money">
              <h3
                className={`fw-bold ${
                  rec.account === "Expenses"
                    ? "text-error-400"
                    : "text-success-400"
                }`}
              >
                {`${rec.account === "Expenses" ? "-" : ""}`}&#8369;
                {rec.amount}
              </h3>
              <p className="fs-200 text-neutral-700">
                &#8369;{computeBalance(index)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrackRecord;
