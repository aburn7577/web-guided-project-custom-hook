import data from './../../data'
import axios from 'axios'


export const getAllPokemon = () => {
    return (data);
}

export const getPokemon = (id) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => {
            return res.data
        });
}
