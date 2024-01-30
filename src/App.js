import './App.css';

function App() {
  return (
    <body class="body body--backgroundImage">
      <form class="form js-form">
        <fieldset class="form__fieldset">
          <legend class="form__legend">CURRENCY CALCULATOR</legend>
          <p>
            <label class="form__label">Amount:
              <input class="form__input js-amount" type="number" name="amount" placeholder="Wpisz kwotę - waluta PLN"
                step="0.01" max="10000000000" min="0.01" required autofocus />
            </label>
          </p>
          <p>
            <label class="form__label">Choose currency:
              <select class="form__select js-currency" name="currency" required>
                <option value="EUR">EUR - euro</option>
                <option value="USD">USD - U.S. dollar</option>
                <option value="GBP">GBP - pound sterling</option>
              </select>
            </label>
          </p>
        </fieldset>
        <button class="form__button">Calculate</button>
        <p><strong class="js-result form__result">Here you will see the result</strong></p>
      </form>
    </body>
  );
}

export default App;
