import { useState } from 'react'

const X = 'https://icongr.am/entypo/cross.svg?size=150&color=ff0505';
const O = 'https://icongr.am/clarity/check-circle.svg?size=128&color=1017da';
const base = 'https://icongr.am/entypo/cycle.svg?size=128&color=6a2a25';

const Cuadricula = ({ value, onClick, turno}) => {

    const [player, setPlayer] = useState(base)
    const handleClick = () => {
        (turno !== null && value === null) && onClick()
        if (turno === 'X') {
            setPlayer(X);
        } else {
            setPlayer(O);
        }

    }

    return (

        <div className='cursor-pointer border border-gray-700 rounded-md w-24 h-24 md:w-40 md:h-40 bg-gray-200 m-2 pt-3 pl-2 hover:shadow-lg hover:shadow-gray-800' onClick={() => handleClick()}>
            {player === X ? (
                <div>
                    <img src={player} alt='x'/>
                </div>
            ) : (
                <div>
                    <img src={player} alt='o'/>
                </div>
            )}
        </div>
    )
}

export default Cuadricula