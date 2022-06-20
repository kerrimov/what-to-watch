import React from "react";

const wrapperMain = {
  padding: "120px 50px 50px 50px",
};

const NotFoundPage = () => (
    <div style={wrapperMain}>
      This page does not exist. Go <a href="/">home</a>
    </div>
  );

export { NotFoundPage };