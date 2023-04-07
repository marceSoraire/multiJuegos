import { useState } from 'react'
import 'animate.css';

const X = 'https://icongr.am/entypo/cross.svg?size=150&color=ff0505';
const O = 'https://icongr.am/clarity/check-circle.svg?size=128&color=1017da';
const base = 'https://icongr.am/entypo/cycle.svg?size=128&color=currentColor';

const Cuadricula = ({ value, onClick, turno }) => {

    const [player, setPlayer] = useState(null);
    const handleClick = () => {
        turno === 'X' && value === null && setPlayer(X); onClick();
        turno === 'O' && value === null && setPlayer(O); onClick();
    }

    return (
        <>
            {value !== null ? (
                <div className='cursor-pointer border border-gray-700 rounded-xl w-24 h-24 md:w-40 md:h-40 bg-zinc-100 m-2 pt-3 pl-2 hover:shadow-lg hover:shadow-gray-800' onClick={() => handleClick()}>
                    {player === X ? (
                        <div className='animate__animated animate__rotateIn'>
                            <img src={player} alt='x' />
                        </div>
                    ) : (
                        <div className='animate__animated animate__wobble'> 
                            <img src={player} alt='o' />
                        </div>
                    )}
                </div>
            ) : (
                <div className='cursor-pointer border border-gray-700 rounded-xl w-24 h-24 md:w-40 md:h-40 bg-zinc-100 m-2 pt-3 pl-2 hover:shadow-lg hover:shadow-gray-800' onClick={() => handleClick()}>
                    <div>
                        <img src={base} alt='base' />
                    </div>
                </div>
            )}
        </>
    )
}

export default Cuadricula