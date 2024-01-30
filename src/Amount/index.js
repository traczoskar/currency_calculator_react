import "./style.css";

const Amount = () => (
    <div>
        <label className="form__label">Amount:
            <input className="form__input" type="number" name="amount" placeholder="Wpisz kwotę - waluta PLN"
                step="0.01" max="10000000000" min="0.01" required />
        </label>
    </div>
);

export default Amount;