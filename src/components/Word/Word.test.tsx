import React from "react";
import { render, screen } from "@testing-library/react";
import Word from "./Word";

test("renders a span for every letter in the selectedWord", async () => {
  render(<Word selectedWord="tester" correctLetters={[]} />);
  const items = screen.queryAllByTestId("letter");
  expect(items).toHaveLength(6);
});

test("double test: renders a span for every letter in the selectedWord", async () => {
  render(<Word selectedWord="xbox" correctLetters={[]} />);
  const items = screen.queryAllByTestId("letter");
  expect(items).toHaveLength(4);
});
