import pokeEndpoint from "api/api";
import Button from "components/UI/Button";
import { useEffect, useReducer, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

const paginationState = {
  limit: 6,
  offset: 0,
};

function paginationReducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { ...state, offset: state.limit + state.offset };
    case "DECREASE":
      return { ...state, offset: state.offset - state.limit };
    default:
      break;
  }
}

function Pokelist(props) {
  const [pokemonPagination, dispatchPagination] = useReducer(
    paginationReducer,
    paginationState
  );
  const [pokemonList, setPokemonList] = useState([]);
  const { offset } = pokemonPagination;

  useEffect(() => {
    const doPagination = async () => {
      const res = await pokeEndpoint.pokemonPagination(pokemonPagination);
      setPokemonList(res.data.results);
    };
    doPagination();
  }, [offset]);

  const increasePagination = () => {
    dispatchPagination({ type: "INCREASE" });
  };

  const decreasePagination = () => {
    dispatchPagination({ type: "DECREASE" });
  };

  return (
    <Fragment>
      <Button
        disabled={pokemonPagination.offset === 0}
        onClick={decreasePagination}>
        Decrease
      </Button>
      <Button onClick={increasePagination}>Increase</Button>
    </Fragment>
  );
}

export default Pokelist;
