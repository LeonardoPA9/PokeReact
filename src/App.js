import Button from "components/UI/Button";
import "./App.css";

function App() {
  const clickHandler = () => {
    console.log("click");
  };

  return (
    <div className="App">
      <h1>This is the front page</h1>
      <Button onClick={clickHandler}>Soy pokeboton</Button>
    </div>
  );
}

export default App;
