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
  const { apiData } = useCurrencyData();
  console.log(apiData);
  const [result, setResult] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const inputRef = useRef(null);
  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(selectedCurrency, amount);
    inputRef.current.focus();
  };

  // const getExchangeRatesDate = () => {
  //   if (!loading) {
  //     const dateOfData = new Date(currenciesDownloaded.meta.last_updated_at);
  //     return dateOfData;
  //   }
  // };
  // console.log(getExchangeRatesDate());

  // const formattedDateOfData = dateOfData.toLocaleDateString("en-US", {
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit",
  // });

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
      {apiData || apiData.status === "loading" ? (
        <Loading />
      ) : (
        <>
          {apiData || apiData.stat === "downloaded" ? (
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
                  {apiData.status === "downloaded" &&
                    Object.keys(apiData.rates).map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency}
                      </option>
                    ))}
                  ;
                </InputWindow>
              </Label>
              {/* <RatesInfo>
                Exchange rates current as of:{" "}
                <strong>{formattedDateOfData}</strong>
              </RatesInfo> */}
              <Button>
                <CalculateIcon src={exchange_icon} alt="exchange_icon" />
                Calculate
              </Button>
              <Result result={result} />
            </>
          ) : (
            <>
              <ErrorInfo>No currencies available at the moment.</ErrorInfo>
              <ErrorSubInfo>Sorry, please try again later.</ErrorSubInfo>
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Form;
