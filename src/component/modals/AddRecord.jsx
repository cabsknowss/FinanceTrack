import React from "react";
import { Close } from "@mui/icons-material/";

const AddRecord = (props) => {
  const { showModal, setShowModal } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className="addrecord-modal">
      <div className="addrecord-modal__container">
        <h2 className="align-self-center fs-primary-heading fw-bold">
          Add Record
        </h2>
        <div className="addrecord-modal__buttons">
          <p>Income</p>
          <p>Expenses</p>
        </div>
        <div>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <div>
                <label htmlFor="">Item</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Item</label>
                <input type="text" />
              </div>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>

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
