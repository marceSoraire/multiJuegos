import axios from 'axios';

const poke = async (state,id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    state(res.data)
}

const all = async (state, x) => {
    const resx = await axios.get(`https://pokeapi.co/api/v2/pokemon/${x}`);    
    state(resx.data)
}

export {
    poke,
    all
}
