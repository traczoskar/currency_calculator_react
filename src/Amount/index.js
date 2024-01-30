import "./style.css";

const Amount = () => (
    <div>
        <label class="form__label">Amount:
            <input class="form__input js-amount" type="number" name="amount" placeholder="Wpisz kwotę - waluta PLN"
                step="0.01" max="10000000000" min="0.01" required autofocus />
        </label>
    </div>
);

export default Amount;