import { useEffect, useState } from 'react'
import { poke } from '../../Functions/Funtions';
import pokeapi from '../../img/pokeapi.png'
import Load from '../../Components/Load/Load';
import Swal from 'sweetalert2';

const id = Math.round(Math.random() * 25);

const Pokemon = () => {

    const [personaje, setPersoanje] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pokeName, setPokeName] = useState('');
    const [pokeId, setPokeId] = useState(id);
    const [cont, setCont] = useState(0);

    const handleOnChange =(e)=> {
        setPokeName(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (pokeName === personaje.name) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Ganaste',
                text:`${personaje.name}`,
                showConfirmButton: false,
                timer: 1500
              })
              setTimeout(() => {
                  setPokeName('')
                  setPokeId(id) 
                  setCont( cont + 1)
                },1500)        
        } else {
            Swal.fire({
                position: 'top-start',
                icon: 'error',
                title: 'incorrecto',
                showConfirmButton: false,
                timer: 1500
              })
              setTimeout(() => setPokeName(''), 1500) 
        }
    }

    
    useEffect(() => {
        setLoading(true)
        poke(setPersoanje,pokeId);
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [pokeId])
    return (
        <>
            {loading ? (<Load />)
                : (personaje !== null ? (
                    <div className="bg-[url('./img/fondo.jpg')] bg-no-repeat bg-cover bg-center h-[100vh]">
                        <img src={pokeapi} alt='aa' className='flex justify-center mx-auto' />
                        <h4 className='flex justify-center text-[25px] fond-bold'>Aciertos:{cont}</h4>
                        <img src={personaje.sprites.front_default} alt='pokemon' className='w-[400px] mx-auto' />
                            <form onSubmit={handleSubmit} className='flex justify-center'>
                            <input
                                type='text'
                                name='name'
                                value={pokeName}
                                onChange={handleOnChange}
                                className='-mt-6 p-2 rounded-l-md border border-gray-600 hover:shadow-lg hover:shadow-gray-800'/>
                            <button type='submit' className='-mt-6 p-2 rounded-r-md border border-gray-600 hover:shadow-lg hover:shadow-gray-800 bg-slate-200'>Enviar</button>
                        </form>
                    </div >
                ) : (<h3>Error</h3>)
                )}
        </>
    )
}

export default Pokemon