import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const renderApp = <Provider store={store}><App /></Provider>;

test("check film name", () => {
  render(renderApp);
  const filmName = screen.getByRole("progressbar");
  expect(filmName).toBeTruthy();
});