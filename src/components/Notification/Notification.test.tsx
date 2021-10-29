import React from "react";
import { render, screen } from "@testing-library/react";
import Notification from "./Notification";

test("Notification shows message when showNotification prop is true", () => {
  render(<Notification showNotification={true} />);
  const message = screen.getByTestId("notif");
  expect(message).toHaveStyle("transform: translateY(-50px)");
});

test("Notification not on screen when showNotification prop is false", () => {
  render(<Notification showNotification={false} />);
  const message = screen.getByTestId("notif");
  expect(message).toHaveStyle("transform: translateY(0px)");
});
