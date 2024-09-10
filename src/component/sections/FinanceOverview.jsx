import React, { useState, useEffect } from "react";
import { Wallet, CreditCard, CreditCardOff } from "@mui/icons-material";

const FinanceOverview = (props) => {
  const { userRecords } = props;

  const computeBalance = () => {
    let balance = 0;
    for (let i = 0; i < userRecords.length; i++) {
      userRecords[i].account === "Income"
        ? (balance = balance + userRecords[i].amount)
        : (balance = balance - userRecords[i].amount);
    }
    return balance;
  };

  const computeExpenses = () => {
    let expenses = 0;
    for (let i = 0; i < userRecords.length; i++) {
      userRecords[i].account === "Expenses" &&
        (expenses = expenses + userRecords[i].amount);
    }
    return expenses;
  };

  return (
    <>
      <div className="financial-overview padding-bottom-600">
        <div>
          <div>
            <p className=" | fs-200 fw-semi-bold text-neutral-700">Balance</p>
            <h2 className=" | fs-500 fw-bold text-success-400">
              &#8369; {computeBalance()}
              <span className="fs-200 text-success-400 fw-bold"></span>
            </h2>
          </div>
          <div className="financial-overview__icon">
            <Wallet />
          </div>
        </div>
        <div>
          <div>
            <p className=" | fs-200 fw-semi-bold text-neutral-700">
              Monthly Income
            </p>
            <h2 className=" | fs-500 fw-bold">&#8369; {computeBalance()}</h2>
          </div>
          <div className="financial-overview__icon">
            <CreditCard />
          </div>
        </div>
        <div>
          <div>
            <p className=" | fs-200 fw-semi-bold text-neutral-700">
              Monthly Expense
            </p>
            <h2 className=" | fs-500 fw-bold text-error-400">
              &#8369; {computeExpenses()}
            </h2>
          </div>
          <div className="financial-overview__icon">
            <CreditCardOff />
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceOverview;
