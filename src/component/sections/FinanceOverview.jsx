import React, { useState, useEffect } from "react";
import { Wallet, CreditCard, CreditCardOff } from "@mui/icons-material";

const FinanceOverview = () => {
  const [balance, setBalance] = useState(null);
  const [income, setIncome] = useState(null);
  const [expenses, setExpenses] = useState(null);

  useEffect(() => {
    setBalance(24700);
    setIncome(15000);
    setExpenses(250);
  });

  return (
    <>
      <div className="financial-overview padding-bottom-600">
        <div>
          <div>
            <p className=" | fs-200 fw-semi-bold text-neutral-700">Balance</p>
            <h2 className=" | fs-500 fw-bold">
              &#8369; {balance}
              <span className="fs-200 text-success-400 fw-bold">+23%</span>
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
            <h2 className=" | fs-500 fw-bold">&#8369; {income}</h2>
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
            <h2 className=" | fs-500 fw-bold">&#8369; {expenses}</h2>
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
