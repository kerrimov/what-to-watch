import React from "react";
import { render, screen } from "@testing-library/react";
import { CardInfoSection } from "./CardInfoSection";

test("check film name", () => {
  render(<CardInfoSection name={"American siege"} date={"23 Apr 2022"}/>);
  const filmName = screen.getByText(/American siege/i);
  expect(filmName).toBeTruthy();
});