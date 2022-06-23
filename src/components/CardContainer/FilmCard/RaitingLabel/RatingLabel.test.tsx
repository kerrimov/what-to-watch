import React from "react";
import { render } from "@testing-library/react";
import { RatingLabel } from "./RaitingLabel";

test("check label", ()=> {
  const { getByText } = render(<RatingLabel filmRating={5.5}/>);
  const label = getByText(/55%/i);
  expect(label).toBeTruthy();
});