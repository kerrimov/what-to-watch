import React from "react";
import { render, screen } from "@testing-library/react";
import { CardInfoSection } from "../components/CardInfoSection/CardInfoSection";

test("check film name", () => {
  render(<CardInfoSection name={"American siege"} />);
  const filmName = screen.getByText(/American siege/i);
  expect(filmName).toBeTruthy();
});