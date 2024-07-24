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
});
