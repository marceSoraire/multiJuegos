import { useState, useEffect } from 'react'
import { all } from '../../Functions/Funtions';

const one = Math.round(Math.random() * 150);
const noss = Math.round(Math.random() * 2);

const Choice = ({ personaje }) => {

    const [opcion, setOpcion] = useState({});
    const [elegido, setElegido] = useState();
    const [oneId, setOneId] = useState(one);
    const [num, setNum] = useState(noss);
    const [cont, setCont] = useState(0);
    
    const win =()=> {
        console.log('entra por win')
        setCont(cont + 1)
        reload();
    }

    const reload =()=> {
        console.log('entra por reload')
        all(setOpcion, oneId);
        setOneId(one)
        setNum(noss)
    }

    const handleClick = (e) => {
        console.log(e.target.textContent)    
        setElegido(e.target.textContent);
        console.log(elegido);
        elegido === personaje ? (
            win()
        ) : (
            reload()
        )
    }

    useEffect(() => {
        all(setOpcion, oneId);
    }, [oneId])

    console.log(num)
    return (
        <>
            {num === 1 ?
                (<div className='flex flex-wrap'>
                    <div className='border-2 hover:border border-white hover:border-gray-700 p-2 rounded-md m-3 hover:bg-white cursor-pointer' onClick={handleClick}>
                        <p className='mx-2 px-2 uppercase font-semibold'>
                            {personaje}
                        </p>
                    </div>
                    <div className='border-2 hover:border border-white hover:border-gray-700 p-2 rounded-md m-3 hover:bg-white cursor-pointer' onClick={handleClick}>
                        <p className='mx-2 px-2 uppercase font-semibold'>
                            {opcion.name}
                        </p>
                    </div>
                </div>
                ) : (<div className='flex flex-wrap'>
                    <div className='border-2 hover:border border-white hover:border-gray-700 p-2 rounded-md m-3 hover:bg-white cursor-pointer' onClick={handleClick}>
                        <p className='mx-2 px-2 uppercase font-semibold'>
                            {personaje}
                        </p>
                    </div>
                    <div className='border-2 hover:border border-white hover:border-gray-700 p-2 rounded-md m-3 hover:bg-white cursor-pointer' onClick={handleClick}>
                        <p className='mx-2 px-2 uppercase font-semibold'>
                            {opcion.name}
                        </p>
                    </div>
                </div>)
            }
            <div className='border border-gray-700 p-2 rounded-md m-3 cursor-pointer' onClick={handleClick}>
                <h4 className='flex justify-center text-[25px] fond-bold uppercase font-bold'>Aciertos: {cont}</h4>        
            </div>
        </>
    )
}

export default Choice;