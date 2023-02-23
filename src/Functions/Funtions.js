import axios from 'axios';

// const id = Math.round(Math.random() * 25);

const poke = async (state,id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    state(res.data)
}

export {
    poke
}
