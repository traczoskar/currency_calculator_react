import "./style.css";

const Currency = () => (
    <div>
        <label class="form__label">Choose currency:
            <select class="form__select js-currency" name="currency" required>
                <option value="EUR">EUR - euro</option>
                <option value="USD">USD - U.S. dollar</option>
                <option value="GBP">GBP - pound sterling</option>
            </select>
        </label>
    </div>
);

export default Currency;