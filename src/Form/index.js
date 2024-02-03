import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "../Result";
import { Clock } from "../Clock";
import { Wrapper } from "./styled.js";
import { HeaderLogo } from "./styled.js";
import { Legend } from "./styled.js";
import { Label } from "./styled.js";
import { InputName } from "./styled.js";
import { InputWindow } from "./styled.js";
import { Button } from "./styled.js";
import { CalculateIcon } from "./styled.js";

const Form = ({ title, calculateResult, result }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(
    currencies[0].symbol
  );
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(selectedCurrency, amount);
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <Clock />
      <HeaderLogo src="./images/header_logo.png" alt="Logo" />
      <Legend>{title}</Legend>
      <Label>
        <InputName>Amount in PLN:</InputName>
        <InputWindow
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
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
        <CalculateIcon src="./images/exchange_icon.png" alt="exchange_icon" />
        Calculate
      </Button>
      <Result result={result} />
    </Wrapper>
  );
};

export default Form;
