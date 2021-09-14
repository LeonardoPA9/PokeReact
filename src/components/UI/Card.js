import React from 'react';
import classes from '../UI/Card.module.css';
import { useEffect, useState } from "react";
import pokeEndpoint from "api/api";


export const Card = () => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
      const fetchPoke = async () => {
        const res = await pokeEndpoint.getDitto(1);
        const { data: { name, base_experience, types, weight, height, sprites} } = res
        setPokemon({name, base_experience, types, weight, height, sprites})
      };
      fetchPoke();
    }, []);

    return (
        <div className={classes.Card}>
            <div>
                {pokemon.sprites && <img className={classes.imagen} src={pokemon.sprites.front_shiny} alt='pokeno'/>}
            </div>
            <div className={classes.info}>
            <div className={classes.name}>{pokemon.name}</div>
            <div className={classes.bar}></div>
            <div className={classes.cardData}>
                <div>
                    <div>100</div>
                    <div>HP</div>
                </div>
                <div>
                <div>{pokemon.base_experience}</div>
                <div>EXP</div>
                </div>
            </div>
            <div>TRANSFERBUTTON</div>
            <div className={classes.cardData}>
                <div>
                <div>{pokemon.types && pokemon.types[0].type.name}</div>
                <div>TYPE</div>
                </div>
                <div>
                <div>{pokemon.weight}</div>
                <div>WEIGHT</div>
                </div>
                <div>
                <div>{pokemon.height}</div>
                <div>HEIGHT</div>
                </div>
            </div>
            </div>
        </div>
    )
}
