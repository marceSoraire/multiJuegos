import React from 'react';
import game from '../../img/gameTimes.jpg';
import Cards from '../Cards/Cards';
import memo from '../../img/memotest.jpg';
import XO from '../../img/tateti.jpg';
import poke from '../../img/pokemon.jpeg';
import { Link } from 'react-router-dom';

const Presentacion = () => {
  return (
    <div>
      <img src={game} alt='img' className='w-full h-[50vh] md:h-full' />
      <div className='block text-center md:flex flex-wrap md:justify-around my-12'>
        <Link to='memotest'><Cards img={memo} title='Memotest'/></Link>
        <Link to='tateti'><Cards img={XO} title='Ta-Te-Ti'/></Link>
        <Link to='pokemon'><Cards img={poke} title='Pokemon'/></Link>
      </div>
    </div>
  )
}

export default Presentacion