import React from "react";

const Containers = () => {
  return (
    <div>
      <div className={"container-fluid"}>
        <div className={"row"}>
          <div className={"col-lg-6 bg-primary"}>
            {" "}
            <h1> Markdown </h1>
            <textarea name="text-area" id="" cols="60" rows="25"></textarea>
          </div>
          <div className={"col-lg-6 bg-success"}>
            {" "}
            <h1> Preview </h1>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Containers;
