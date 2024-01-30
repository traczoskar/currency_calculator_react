import Amount from "./Amount";
import Currency from "./Currency";

function App() {
  return (
    <body class="body body--backgroundImage">
      <form class="form js-form">
        <fieldset class="form__fieldset">
          <legend class="form__legend">CURRENCY CALCULATOR</legend>
          <Amount />
          <Currency />
        </fieldset>
        <button class="form__button">Calculate</button>
        <p><strong class="js-result form__result">Here you will see the result</strong></p>
      </form>
    </body>
  );
}

export default App;
