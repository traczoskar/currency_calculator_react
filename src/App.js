import { useState } from "react";
import Form from "./Form";
import { currencies } from "./currencies";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (selectedCurrency, amount) => {
    const currencyRate = currencies.find((currency) => currency.symbol === selectedCurrency).ratio;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / currencyRate,
      currency: selectedCurrency,
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
};

export default App;
