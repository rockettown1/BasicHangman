import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders title text", () => {
  render(<Header />);
  const title = screen.getByText(/Let's play Hangman/i);
  const tagline = screen.getByText(/Enter a letter.../i);
  expect(title).toBeInTheDocument();
  expect(tagline).toBeInTheDocument();
});
