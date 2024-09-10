import React, { useState } from "react";
import { Close } from "@mui/icons-material/";

const AddRecord = (props) => {
  const { showModal, setShowModal } = props;
  const incomeCategories = ["", "Income", "Freelance", "Investment", "Others"];
  const expensesCategories = [
    "",
    "Transportation",
    "Restaurant",
    "Grocery",
    "Contribution",
    "Online Shopping",
    "Others",
  ];

  const [account, setAccount] = useState("Expenses");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category || !description || !cost) {
      console.log("Incomplete inputs");
      return;
    }

    const data = {
      category,
      description,
      cost: parseFloat(cost),
    };

    console.log(data);

    try {
      // API POST
      // const response = await fetch("", {
      //   method: POST,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });
      // if (!response.ok) {
      //   throw new Error(`ERROR! Status: ???`);
      // }
      // const result = await response.json();
    } catch (error) {
      // console.log(error.message);
    }
  };

  const clearInputs = () => {
    setCategory("");
    setDescription("");
    setCost("");
  };

  return (
    <div className="addrecord-modal">
      <div className="addrecord-modal__container">
        <h2 className="addrecord-title">Add Record</h2>
        <div className="addrecord-modal__buttons">
          <button
            onClick={() => {
              setAccount("Income");
              clearInputs();
            }}
            className={`${account === "Income" && "active"}`}
          >
            Income
          </button>
          <button
            onClick={() => {
              setAccount("Expenses");
              clearInputs();
            }}
            className={`${account === "Expenses" && "active"}`}
          >
            Expenses
          </button>
        </div>
        <form
          className="addrecord-forms"
          action=""
          onSubmit={(e) => handleSubmit(e)}
        >
          {account === "Expenses" ? (
            <div>
              <label htmlFor="category">Category</label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                name="category"
                id="category"
              >
                {expensesCategories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div>
              <label htmlFor="category">Category</label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                name="category"
                id="category"
                value={category}
              >
                {incomeCategories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div>
            <label htmlFor="description">Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="cost">Cost</label>
            <input
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              type="number"
            />
          </div>
          <div className="addrecord-submit">
            <button className="addrecord-submit__btn">Submit</button>
          </div>
        </form>

        <Close
          style={{
            color: "black",
            position: "fixed",
            right: "25px",
            top: "25px",
          }}
          onClick={() => setShowModal(!showModal)}
        />
      </div>
    </div>
  );
};

export default AddRecord;
