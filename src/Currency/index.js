import "./style.css";

const Currency = () => (
    <div>
        <label className="form__label">Choose currency:
            <select className="form__select" name="currency" required>
                <option value="EUR">EUR - euro</option>
                <option value="USD">USD - U.S. dollar</option>
                <option value="GBP">GBP - pound sterling</option>
            </select>
        </label>
    </div>
);

export default Currency;