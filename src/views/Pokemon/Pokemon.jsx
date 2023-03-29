import { useEffect, useState } from 'react'
import { poke } from '../../Functions/Funtions';
import pokeapi from '../../img/pokeapi.png'
import Load from '../../Components/Load/Load';
import Choice from '../../Components/Choice/Choice';

const id = Math.round(Math.random() * 150);

const Pokemon = () => {

    const [personaje, setPersoanje] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pokeId, setPokeId] = useState(id);

    useEffect(() => {
        setLoading(true)
        poke(setPersoanje, pokeId);
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [pokeId])

    return (
        <>
            {loading ? (<Load />)
                : (personaje !== null ? (
                    <div className="bg-[url('./img/fondo.jpg')] bg-no-repeat bg-cover bg-center h-[100vh]">
                        <img src={pokeapi} alt='aa' className='flex justify-center mx-auto'/>
                        <img src={personaje.sprites.front_default} alt='pokemon' className='w-[400px] mx-auto'/>
                        <div className='flex flex-wrap justify-center'>
                            <div className=''>
                                <Choice personaje={personaje.name}/>
                            </div>
                        </div>
                    </div >
                ) : (<h3>Error</h3>)
                )}
        </>
    )
}

export default Pokemon