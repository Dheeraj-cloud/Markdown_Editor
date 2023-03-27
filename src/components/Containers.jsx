import React from "react";
import convertToHTML from "markdown-to-html-converter";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import * as DOMPurify from 'dompurify';

const Containers = () => {
  const [markdown, Setmarkdown] = useState("");
  const [preview, Setpreview] = useState("");
  const onInput = (e) => {
    Setmarkdown(e.target.value);
    Setpreview(convertToHTML(markdown));
    DOMPurify.sanitize(preview);
  };

  return (
    <div>
      <h1>Markdown-Editor</h1>
      <div className={"container-fluid"}>
        <div className={"row"}>
          <div className={"col-lg-6 bg-primary"}>
            <h1> Markdown </h1>
            <textarea
              onChange={onInput}
              value={markdown}
              name="text-area"
              id=""
              cols="60"
              rows="25"
            ></textarea>
          </div>
          <div className={"col-lg-6 bg-success"}>
            <h1> Preview </h1>
            <div dangerouslySetInnerHTML={{ __html: preview }} />
          </div>
        </div>
      </div>
      <Link to={"cheatsheet"}>
        {" "}
        <h2>Link to the cheat sheet</h2>{" "}
      </Link>
      <Outlet></Outlet>
    </div>
  );
};

export default Containers;
