import React from "react";
import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import { cardData } from "./mocks/cardData";
import { Provider } from "react-redux";
import { store } from "../../store";
import axios from "axios";
import { CardContainer } from "./CardContainer";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const renderCardContainer = <Provider store={store}><CardContainer /></Provider>;

describe("render App", () => {
  it("renders App component", async () => {
    mockedAxios.get.mockResolvedValue({ data: { "results": cardData }});
    act(() => {render(renderCardContainer);});
    expect(await screen.findByText(/The Batman/i)).toBeInTheDocument();
    expect(screen.getByAltText(/The Batman/i)).toBeInTheDocument();
  });
});


describe("Click in App", () => {
  it("it should click on favorite", async () => {
    mockedAxios.get.mockResolvedValue({ data: { "results": cardData }});
    await act(async () => {render(renderCardContainer);});
    const likes = await waitFor(() => screen.getAllByRole("checkbox"));
    likes.forEach((like) => {
      expect(like).not.toBeChecked();
      act(() => { fireEvent.click(like); });
      expect(like).toBeChecked();
    });
  });
});