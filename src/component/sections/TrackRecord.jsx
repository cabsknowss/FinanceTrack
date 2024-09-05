import React, { useState } from "react";
import { DirectionsBus, Fastfood, Money } from "@mui/icons-material";

const TrackRecord = () => {
  return (
    <>
      <div className="track-records ">
        <h2 className="fw-semi-bold fs-500 padding-bottom-500">Your Account</h2>
        <div className="track-record-list | margin-bottom-400">
          <div className="track-record-list__details">
            <i className="flex-center bg-neutral-400 padding-300 max-radius">
              <Fastfood />
            </i>
            <div>
              <h2 className="fw-bold">Mcdonalds</h2>
              <p className="fs-200 text-neutral-700">Food</p>
            </div>
          </div>
          <div className="track-record-list__money">
            <h3 className="fw-bold text-error-400">-&#8369;200</h3>
            <p className="fs-200 text-neutral-700">&#8369;24,700</p>
          </div>
        </div>

        <div className="track-record-list | margin-bottom-400">
          <div className="track-record-list__details">
            <i className="flex-center bg-neutral-400 padding-300 max-radius">
              <DirectionsBus />
            </i>
            <div>
              <h2 className="fw-bold">Bus to Work</h2>
              <p className="fs-200 text-neutral-700">Transportation</p>
            </div>
          </div>
          <div className="track-record-list__money">
            <h3 className="fw-bold text-error-400">-&#8369;50</h3>
            <p className="fs-200 text-neutral-700">&#8369;24,900</p>
          </div>
        </div>

        <div className="track-record-list | margin-bottom-400">
          <div className="track-record-list__details">
            <i className="flex-center bg-neutral-400 padding-300 max-radius">
              <Money />
            </i>
            <div>
              <h2 className="fw-bold">Work Salary</h2>
              <p className="fs-200 text-neutral-700">Income</p>
            </div>
          </div>
          <div className="track-record-list__money">
            <h3 className="fw-bold text-success-400">&#8369;24,950</h3>
            <p className="fs-200 text-neutral-700">&#8369;24,950</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackRecord;
