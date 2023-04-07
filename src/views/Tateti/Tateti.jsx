import { useState } from 'react'
import Cuadricula from '../../Components/Cuadricula/Cuadricula';
import Swal from 'sweetalert2';

const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
const Tateti = () => {

    const [turno, setTurno] = useState('X');
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [win, setWin] = useState([]);
    const [puntaje, setPuntaje] = useState({
        X: 0,
        O: 0,
    });

    const reset = () => {
        setTurno('X');
        setSquares(Array(9).fill(null));
    }

    const createCuadricula = values => (
        values.map(value => (
            <Cuadricula
                win={win}
                turno={turno}
                onClick={() => handleOnClick(value)}
                key={`square_${value}`}
                value={squares[value]}
            />
        ))
    )

    const handleOnClick = select => {
        let newSquares = [...squares];
        newSquares.splice(select, 1, turno);
        setSquares(newSquares);
        chackGanador(newSquares)
    }

    const chackGanador = newSquares => {
        setTurno(turno === 'X' ? 'O' : 'X')
        for (let i = 0; i < winner.length; i++) {
            const [a, b, c] = winner[i];
            if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Ganador: ${newSquares[a]}`,
                    showConfirmButton: false,
                    timer: 2000
                })
                setWin(winner[i])
                finJuego(newSquares[a], winner[i]);
                return
            }
        }
        if (!newSquares.includes(null)) {
            finJuego(null, Array.from(Array(10).keys()));
            return
        }
    }
    const finJuego = (result) => {
        setTurno(null)
        if (result !== null) {
            setPuntaje({
                ...puntaje,
                [result]: puntaje[result] + 1,
            })
        }
        setTimeout(() => reset(), 2000)
    }
    return (
        <div className="-mt-2 w-full bg-[url('./img/fondoComun.jpg')] bg-no-repeat bg-cover bg-center h-[100vh]">
            <h1 className='text-center text-[25px] font-serif text-gray-900 uppercase mt-2'>TA-TE-TI</h1>
            <div className='flex flex-col w-full md:w-[70%] lg:w-[50%] xl:w-[30%] mx-auto md:p-12'>
                <div className='flex justify-evenly'>
                    {createCuadricula([0, 1, 2])}
                </div>
                <div className='flex justify-evenly'>
                    {createCuadricula([3, 4, 5])}
                </div>
                <div className='flex justify-evenly'>
                    {createCuadricula([6, 7, 8])}
                </div>
            </div>
            <div className='flex justify-center w-full md:w-[56%] lg:w-[50%] xl:w-[25%] mx-auto '>
                <div className='bg-red-600 w-full text-center text-white text-[40px] rounded-l-xl'>{puntaje.X}</div>
                <div className='bg-blue-600 w-full text-center text-white text-[40px] rounded-r-xl'>{puntaje.O}</div>
            </div>
        </div>
    )
}

export default Tateti