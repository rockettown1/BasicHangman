import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title, word section, stick man and wrong letters box", () => {
  render(<App />);
  const title = screen.getByText(/Let's play Hangman/i);
  const word = screen.getByTestId("word");
  const stickman = screen.getByTestId("stickman");
  const wrongbox = screen.getByTestId("wrongbox");
  expect(title).toBeInTheDocument();
  expect(word).toBeInTheDocument();
  expect(stickman).toBeInTheDocument();
  expect(wrongbox).toBeInTheDocument();
});
