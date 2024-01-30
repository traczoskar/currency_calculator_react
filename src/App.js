import Container from "./Container";
import Form from "./Form";
import Amount from "./Amount";
import Currency from "./Currency";
import Calculate from "./Calculate";
import Result from "./Result";

function App() {
  return (
    <Container>
      <body className="body--backgroundImage">
      <Form
        title="CURRENCY CALCULATOR"
        data={
          <>
            <Amount />
            <Currency />
          </>
        }
        calculation={
          <>
            <Calculate />
            <Result />
          </>
        }
      />
    </body>
    </Container>
  );
}

export default App;
