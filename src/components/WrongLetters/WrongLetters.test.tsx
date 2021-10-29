import React from "react";
import { render, screen } from "@testing-library/react";
import WrongLetters from "./WrongLetters";

test("if 1 wrong letter then 'wrong' should be visible text", () => {
  render(<WrongLetters wrongLetters={["a"]} />);
  const message = screen.getByText(/wrong letters/i);
  expect(message).toBeInTheDocument();
});

test("when 2 wrong letter, only 2 span should show", async () => {
  render(<WrongLetters wrongLetters={["a", "b"]} />);
  const items = screen.queryAllByTestId("wrong");
  expect(items).toHaveLength(2);
});
