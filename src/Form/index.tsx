import { useState, useRef } from "react";
import { Result } from "../Result/index.js";
import { Clock } from "../Clock/index.js";
import {
  Wrapper,
  HeaderLogo,
  Legend,
  Label,
  InputName,
  InputWindow,
  RatesDate,
  Button,
  CalculateIcon,
  ErrorInfo,
  ErrorSubInfo,
} from "./styled";
import { Loading } from "./Loading/index.js";
import { useCurrencyData } from "./useCurrencyData.js";
import header_logo from "../images/header_logo.png";
import exchange_icon from "../images/exchange_icon.png";

interface FormProps {
  title: string;
}

interface CurrencyData {
  status: string;
  rates?: { [key: string]: { code: string; value: number } };
}

interface ResultData {
  sourceAmount: number;
  targetAmount: number;
  currency: string;
}

const Form = ({ title }: FormProps) => {
  const apiData: CurrencyData = useCurrencyData();
  const initialResult: ResultData = {
    sourceAmount: 0,
    targetAmount: 0,
    currency: "",
  };
  const [result, setResult] = useState<ResultData>(initialResult);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    calculateResult(selectedCurrency, amount);
    inputRef?.current?.focus();
  };

  const getExchangeRatesDate = (): string | undefined => {
    if (apiData.status === "downloaded") {
      const dateOfData = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      return dateOfData;
    }
  };

  const calculateResult = (selectedCurrency: string, amount: string) => {
    const getCurrencyRate = (key: string) => {
      if (apiData.rates) {
        const currency = Object.values(apiData.rates).find(
          (currency) => currency.code === key
        );
        if (currency) {
          return currency.value;
        }
      }
    };

    const targetCurrencyRate = getCurrencyRate(selectedCurrency);
    const plnCurrencyRate = getCurrencyRate("PLN");

    setResult({
      sourceAmount: +amount,
      targetAmount:
        +amount *
        ((targetCurrencyRate ? targetCurrencyRate : 1) /
          (plnCurrencyRate ? plnCurrencyRate : 1)),
      currency: selectedCurrency,
    });
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <Clock />
      <HeaderLogo src={header_logo} alt="header_logo" />
      <Legend>{title}</Legend>
      {apiData.status === "loading" ? (
        <Loading />
      ) : apiData.status === "error" ? (
        <>
          <ErrorInfo>No currencies available at the moment.</ErrorInfo>
          <ErrorSubInfo>Sorry, please try again later.</ErrorSubInfo>
        </>
      ) : (
        <>
          <Label>
            <InputName>Amount in PLN:</InputName>
            <InputWindow
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              ref={inputRef}
              type="number"
              placeholder="Enter the amount to exchange"
              step="0.01"
              max="10000000000"
              min="0.01"
              required
            />
          </Label>
          <Label>
            <InputName>Choose currency:</InputName>
            <InputWindow
              as="select"
              value={selectedCurrency}
              onChange={({ target }) => setSelectedCurrency(target.value)}
              name="currency"
              required
            >
              {apiData.rates &&
                Object.keys(apiData.rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
            </InputWindow>
          </Label>
          <RatesDate>
            Exchange rates current as of:{" "}
            <strong>{getExchangeRatesDate()}</strong>
          </RatesDate>
          <Button>
            <CalculateIcon src={exchange_icon} alt="exchange_icon" />
            Calculate
          </Button>
          <Result result={result} />
        </>
      )}
    </Wrapper>
  );
};

export default Form;
