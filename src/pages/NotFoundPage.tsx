import React from "react";
const wrapperMain = {
  paddingTop: "120px",
};

const NotFoundPage = () => {
  return (
    <div style={wrapperMain}>
      This page does not exist. Go <a href="/">home</a>
    </div>
  );
};

export { NotFoundPage };