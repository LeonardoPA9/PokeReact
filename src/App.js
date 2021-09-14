import { useEffect } from "react";
import pokeEndpoint from "api/api";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchPoke = async () => {
      const res = await pokeEndpoint.getDitto();
      console.log(res.data);
    };

    fetchPoke();
  }, []);

  return (
    <div className="App">
      <h1>This is the front page </h1>
    </div>
  );
}

export default App;
