import { useState, useEffect } from 'react'
import { getAllPokemon, getPokemon } from '../services/PokeServices';

//custom hook
const usePokeState = () => {
    const [pokemen, setPokemen] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState({});

    useEffect(() => {
        setPokemen(getAllPokemon());
    }, []);

    const handlePoke = (id) => {
        getPokemon(id)
            .then((data) => {
                setSelectedPokemon(data);
            });
    };
    return [pokemen, selectedPokemon, handlePoke]

}
export default usePokeState