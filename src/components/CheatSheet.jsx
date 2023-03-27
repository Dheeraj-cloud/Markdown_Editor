import React from "react";
import { Link, Outlet } from "react-router-dom";

const CheatSheet = () => {
  return (
    <div className={"text-center"}>
      <div className={"container-fluid bg-danger"}>
        <div className={"row"}>
          <h1>Cheat Sheet</h1>
          <div className={"col-lg-12"}>
            <span>#</span>
            <p>Used for h1 tags</p>
            <span>##</span>
            <p>Used for h2 tags</p>
            <span>###</span>
            <p>Used for h3 tags</p>
            <span>####</span>
            <p>Used for h4 tags</p>
            <span>#####</span>
            <p>Used for h5 tags</p>
            <span>######</span>
            <p>Used for h6 tags</p>
            <span>* *</span>
            <p>Used for Italic tags</p>
            <span>** **</span>
            <p>Used for Bold tags</p>
          </div>
        </div>
      </div>
      <Link to={"/"}>
        {" "}
        <h2>Navigate back to markdown</h2>
      </Link>
      <Outlet></Outlet>
    </div>
  );
};

export default CheatSheet;
