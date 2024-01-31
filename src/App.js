import { useState } from "react";
import Form from "./Form";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (selectedCurrency, amount) => {
    const currencyElement = currencies.find(
      (currency) => currency.symbol === selectedCurrency
    );
    const currencyRate = currencyElement.ratio;
    setResult({
      sourceAmount: +amount,
      targetAmount: amount / currencyRate,
      currency: selectedCurrency,
      flag: currencyElement.flag,
    });
  };

  return (
    <main>
      <Form
        title="CURRENCY CALCULATOR"
        calculateResult={calculateResult}
        result={result}
      />
    </main>
  );
}

export default App;
