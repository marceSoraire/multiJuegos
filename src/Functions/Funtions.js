import axios from 'axios';

const poke = async (state, id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    state(res.data)
}

export {
    poke,
}
