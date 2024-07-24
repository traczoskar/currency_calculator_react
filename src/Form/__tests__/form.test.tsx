import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { useCurrencyData } from "../../hooks/useCurrencyData";
import { theme } from "theme";
import Form from "../index";

jest.mock("../../hooks/useCurrencyData");

const renderForm = () =>
  render(
    <ThemeProvider theme={theme}>
      <Form title="Test Form" />
    </ThemeProvider>
  );

const getFormControls = () => {
  const input = screen.getByTestId("input") as HTMLInputElement;
  const select = screen.getByTestId("select") as HTMLSelectElement;
  const calculateBtn = screen.getByTestId("calculate-btn");
  return { input, select, calculateBtn };
};

const mockApiData = {
  status: "downloaded",
  rates: {
    USD: { code: "USD", value: 1 },
    PLN: { code: "PLN", value: 3.9277606978 },
    EUR: { code: "EUR", value: 0.9181001514 },
  },
};

describe("renders a Form component and its children", () => {
  afterAll(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("should render a Form component", () => {
    (useCurrencyData as jest.Mock).mockReturnValue(mockApiData);
    renderForm();
    const { input, select, calculateBtn } = getFormControls();
    expect(input).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(calculateBtn).toBeInTheDocument();
    expect(screen.getByTestId("title")).toHaveTextContent("Test Form");
    expect(screen.getByTestId("form")).toBeInTheDocument();
    expect(screen.getByTestId("clock")).toBeInTheDocument();
    expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    expect(screen.queryByTestId("error")).not.toBeInTheDocument();
  });

  test("should render Loading window when API data is not downloaded yet", () => {
    (useCurrencyData as jest.Mock).mockReturnValue({
      status: "loading",
    });
    renderForm();
    expect(screen.getByTestId("loading")).toBeInTheDocument();
    expect(screen.getByText("Loading currency rates ...")).toBeInTheDocument();
  });

  test("should render Error window when API data fetching has failed", () => {
    (useCurrencyData as jest.Mock).mockReturnValue({
      status: "error",
    });
    renderForm();
    expect(screen.getByTestId("error")).toBeInTheDocument();
    expect(
      screen.getByText("No currencies available at the moment.")
    ).toBeInTheDocument();
  });

  test("should render currencies list in select window", () => {
    (useCurrencyData as jest.Mock).mockReturnValue(mockApiData);
    renderForm();
    expect(screen.getByTestId("select")).toContainHTML("option");
    expect(screen.getAllByTestId("option")).toHaveLength(3);
    const options = screen.getAllByTestId("option");
    expect(options[0]).toHaveTextContent("USD");
  });
});
