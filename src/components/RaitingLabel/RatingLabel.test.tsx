import React from "react";
import { render } from "@testing-library/react";
import { CircularProgressWithLabel } from "./RaitingLabel";

test("check label", ()=> {
  const { getByText } = render(<CircularProgressWithLabel value={55}/>);
  const label = getByText(/55%/i);
  expect(label).toBeTruthy();
});