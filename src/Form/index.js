import { useState, useRef } from "react";
import { Result } from "../Result";
import { Clock } from "../Clock";
import {
  Wrapper,
  HeaderLogo,
  Legend,
  Label,
  InputName,
  InputWindow,
  RatesInfo,
  Button,
  CalculateIcon,
  ErrorInfo,
  ErrorSubInfo,
} from "./styled.js";
import { Loading } from "./Loading/index.js";
import { useCurrencyData } from "./useCurrencyData.js";
import header_logo from "../images/header_logo.png";
import exchange_icon from "../images/exchange_icon.png";

const Form = ({ title }) => {
  const apiData = useCurrencyData();
  const [result, setResult] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const inputRef = useRef(null);
  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(selectedCurrency, amount);
    inputRef.current.focus();
  };

  const getExchangeRatesDate = () => {
    if (apiData.status === "downloaded") {
      const dateOfData = new Date(apiData.date).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      return dateOfData;
    }
  };

  const calculateResult = () => {
    const getCurrencyRate = (key) =>
      Object.values(apiData.rates).find((currency) => currency.code === key)
        .value;

    const targetCurrencyRate = getCurrencyRate(selectedCurrency);
    const plnCurrencyRate = getCurrencyRate("PLN");

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * (targetCurrencyRate / plnCurrencyRate),
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
                  <option key={currency.code} value={currency.code}>
                    {currency}
                  </option>
                ))}
            </InputWindow>
          </Label>
          <RatesInfo>
            Exchange rates current as of:{" "}
            <strong>{getExchangeRatesDate()}</strong>
          </RatesInfo>
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
