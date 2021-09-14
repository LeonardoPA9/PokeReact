import Card from "components/UI/Card";
import classes from "./Pokecard.module.css";

function Pokecard({ pokemon }) {
  return (
    <Card>
      <div>
        {pokemon.sprites && (
          <img
            className={classes.image}
            src={pokemon.sprites.front_shiny}
            alt={pokemon.name}
          />
        )}
      </div>
      <div className={classes.info}>
        <div className={classes.name}>
          <p>{pokemon.name}</p>
        </div>
        <div
          className={`${classes.bar} ${
            classes[pokemon.types && pokemon.types[0].type.name]
          }`}></div>
        <div className={classes["card-data"]}>
          <div>
            <p>100</p>
            <p>HP</p>
          </div>
          <div>
            <p>{pokemon.base_experience}</p>
            <p>EXP</p>
          </div>
        </div>
        <div className={classes["card-data"]}>
          <div>
            <p>{pokemon.types && pokemon.types[0].type.name}</p>
            <p>Type</p>
          </div>
          <div>
            <p>{pokemon.weight}</p>
            <p>Weight</p>
          </div>
          <div>
            <p>{pokemon.height}</p>
            <p>Height</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Pokecard;
