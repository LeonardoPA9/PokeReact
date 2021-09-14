<<<<<<< HEAD
import { Card } from "components/UI/Card";
=======
import { useEffect } from "react";
import Button from "components/UI/Button";
>>>>>>> endpoints
import "./App.css";

function App() {


  const clickHandler = () => {
    console.log("click");
  };

  return (
    <div className="App">
      <h1>This is the front page</h1>
<<<<<<< HEAD
      <Card/>
=======
      <Button onClick={clickHandler}>Soy pokeboton</Button>
>>>>>>> endpoints
    </div>
  );
}

export default App;
