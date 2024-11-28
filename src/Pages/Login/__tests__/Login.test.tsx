import React from "react";
import Login from "../Login";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("should run the Login components", () => {
  it("test run", () => {
    render(<Login />);
    expect(screen.getByText("deva")).toBeInTheDocument();
  });
});
