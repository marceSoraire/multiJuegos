import React from 'react'
import game from '../../img/gameTimes.jpg'
import games from '../../img/aaa.jpg'
const Presentacion = () => {
  return (
    <div>
        <img src={game} alt='img' className='w-full h-[50vh] md:h-full'/>
        <img src={games} alt='img' className='w-full h-[50vh] md:hidden'/>
    </div>
  )
}

export default Presentacion