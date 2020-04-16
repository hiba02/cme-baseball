import React, { useState, useCallback } from "react";
import { Redirect, Link } from "react-router-dom";

const ShowRoster = ({ playersInfo }) => {
  playersInfo ? console.log(playersInfo) : "";
  return (
    <div className="showRoster_body">
      <p>hello</p>
    </div>
  );
};
export default ShowRoster;
