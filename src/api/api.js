import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_POKEAPI,
});

const pokeEndpoint = {
  getDitto: () => instance.get("pokemon/ditto"),
};

export default pokeEndpoint;
