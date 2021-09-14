import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_POKEAPI,
});

const pokeEndpoint = {
  pokemonPagination: (payload) =>
    instance.get(`pokemon?limit=${payload.limit}&offset=${payload.offset}`),
  getPokemon: (id) => instance.get(`pokemon/${id}`),
};

export default pokeEndpoint;
