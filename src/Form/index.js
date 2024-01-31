import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "../Result";
import "./style.css";

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
    <form className="form" onSubmit={onSubmit}>
      <img
        src="%PUBLIC_URL%/images/header_logo.png"
        alt="Logo"
        className="form__logo"
      />
      <legend className="form__legend form--separator">{title}</legend>
      <label className="form__label">
        <span className="form__label--description">Amount in PLN:</span>
        <input
          className="form__input"
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
          type="number"
          placeholder="Enter the amount to exchange"
          step="0.01"
          max="10000000000"
          min="0.01"
          required
        />
      </label>
      <label className="form__label">
        <span className="form__label--description">Choose currency:</span>
        <select
          className="form__select"
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
        </select>
      </label>

      <button className="form__button">
        <img
          className="form__button--icon"
          src="%PUBLIC_URL%/images/exchange_icon.png"
          alt="exchange_icon"
        />
        Calculate
      </button>
      <Result result={result} />
    </form>
  );
};

export default Form;
