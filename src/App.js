import Button from "components/UI/Button";
import Card from "components/UI/Card";
import { useEffect, useState } from "react";
import pokeEndpoint from "api/api";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchPoke = async () => {
      const res = await pokeEndpoint.getDitto(1);
      const {
        data: { name, base_experience, types, weight, height, sprites },
      } = res;
      setPokemon({ name, base_experience, types, weight, height, sprites });
    };
    fetchPoke();
  }, []);
  const clickHandler = () => {
    console.log("click");
  };

  return (
    <div className="App">
      <h1>This is the front page</h1>
      <Card pokemon={pokemon} />
      <Button onClick={clickHandler}>Soy pokeboton</Button>
    </div>
  );
}

export default App;
