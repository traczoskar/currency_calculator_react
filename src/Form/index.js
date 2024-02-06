import { useState, useRef } from "react";
import { currencies } from "../currencies";
import { Result } from "../Result";
import { Clock } from "../Clock";
import {
  Wrapper,
  HeaderLogo,
  Legend,
  Label,
  InputName,
  InputWindow,
  Button,
  CalculateIcon,
} from "./styled.js";
import header_logo from "../images/header_logo.png";
import exchange_icon from "../images/exchange_icon.png";

const Form = ({ title, calculateResult, result }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(
    currencies[0].symbol
  );
  const [amount, setAmount] = useState("");
  const inputRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(selectedCurrency, amount);
    inputRef.current.focus();
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <Clock />
      <HeaderLogo src={header_logo} alt="header_logo" />
      <Legend>{title}</Legend>
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
          {currencies.map((currency) => (
            <option key={currency.symbol} value={currency.symbol}>
              {currency.name}
            </option>
          ))}
          ;
        </InputWindow>
      </Label>
      <Button>
        <CalculateIcon src={exchange_icon} alt="exchange_icon" />
        Calculate
      </Button>
      <Result result={result} />
    </Wrapper>
  );
};

export default Form;
