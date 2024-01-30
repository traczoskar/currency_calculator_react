import Amount from "./Amount";
import Currency from "./Currency";
import Calculate from "./Calculate";
import Result from "./Result";

function App() {
  return (
    <body className="body body--backgroundImage">
      <form className="form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">CURRENCY CALCULATOR</legend>
          <Amount />
          <Currency />
        </fieldset>
        <Calculate />
        <Result />
      </form>
    </body>
  );
}

export default App;
