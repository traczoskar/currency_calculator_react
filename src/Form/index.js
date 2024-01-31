import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "../Result";
import "./style.css";


const Form = ({ title, calculateResult, result }) => {
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].symbol);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(selectedCurrency, amount);
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">{title}</legend>
                <label className="form__label">
                    Amount:
                    <input
                        className="form__input"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
                        placeholder="Wpisz kwotę - waluta PLN"
                        step="0.01"
                        max="10000000000"
                        min="0.01"
                        required />
                </label>
                <label className="form__label">Choose currency:
                    <select
                        className="form__select"
                        value={selectedCurrency}
                        onChange={({ target }) => setSelectedCurrency(target.value)}
                        name="currency"
                        required>
                        {currencies.map((currency) => (
                            <option
                                key={currency.symbol}
                                value={currency.symbol}>
                                {currency.name}
                            </option>
                        ))};
                    </select>
                </label>
            </fieldset>
            <button className="form__button">Calculate</button>
            <Result result={result} />
        </form>
    );
};

export default Form;