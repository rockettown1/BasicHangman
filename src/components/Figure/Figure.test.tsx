import React from "react";
import { render, screen } from "@testing-library/react";
import Figure from "./Figure";

test("If 1 wrong letter, Head should be rendered but Body should not", () => {
  render(<Figure wrongLetters={["a"]} />);
  const head = screen.getByTestId("head");
  const lines = screen.queryAllByTestId("stick");
  expect(head).toBeInTheDocument();
  expect(lines).toHaveLength(4);
});

test("If 3 wrong letters, number of lines should be 6", () => {
  render(<Figure wrongLetters={["a", "b", "c"]} />);
  const lines = screen.queryAllByTestId("stick");
  //4 for the structure, 1 for the body, 1 for the left arm
  expect(lines).toHaveLength(6);
});
