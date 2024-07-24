import { ThemeProvider } from "styled-components";
import App from "../App";
import { cleanup, render, screen } from "@testing-library/react";
import { theme } from "theme";

describe("App component", () => {
  afterAll(() => {
    cleanup();
  });
  test("should render App component properly", () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const mainElement = screen.getByTestId("main");
    const formElement = screen.getByTestId("form");
    expect(mainElement).toBeInTheDocument();
    expect(formElement).toBeInTheDocument();
  });
});
