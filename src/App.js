import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchPoke = async () => {};

    fetchPoke();
  }, []);

  return (
    <div className="App">
      <h1>This is the front page</h1>
    </div>
  );
}

export default App;
