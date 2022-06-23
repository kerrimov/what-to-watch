import React from "react";
import App from "./App";
import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { cardData } from "./components/CardContainer/mocks/cardData";
import { Provider } from "react-redux";
import { store } from "./store";
import { Endpoints } from "./components/CardContainer/api/constants/endpoints";

const key = process.env.REACT_APP_MOVIEDB_API_KEY;

const renderApp = <Provider store={store}><App /></Provider>;

const server = setupServer(
  rest.get(`${Endpoints.POPULAR_MOVIE_BASE_EP}${key}&language=en-US&page=1`, (req, res, ctx) => {
    return res(ctx.json({ "results": cardData }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("render App", () => {
  it("renders App component", async () => {
    render(renderApp);
    expect(await screen.findByText(/The Batman/i)).toBeInTheDocument();
    expect(screen.getByAltText(/The Batman/i)).toBeInTheDocument();
  });
});


describe("Click in App", () => {
  it("it should click on favorite", async () => {
    render(renderApp);
    const likes = await waitFor (() => screen.getAllByRole("checkbox"));
    likes.forEach((like) => {
      expect(like).not.toBeChecked();
      act(() => { fireEvent.click(like); });
      expect(like).toBeChecked();
    });
  });
});