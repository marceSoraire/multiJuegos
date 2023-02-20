import { useState } from 'react'
import Cuadricula from '../../Components/Cuadricula/Cuadricula';
import Swal from 'sweetalert2';

const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const Tateti = () => {

    const [turno, setTurno] = useState('X');
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [puntaje, setPuntaje] = useState({
        X: 0,
        O: 0,
    });

    const createCuadricula = values => (
        values.map(value => (
            <Cuadricula
                turno={turno}
                onClick={()=> handleOnClick(value)}
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
            const [a,b,c] = winner[i];
            if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c] ) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Ganadore ${newSquares[a]}`,
                    showConfirmButton: false,
                    timer: 2000
                  })
                  setTimeout(() => window.location.reload(), 2000)
                finJuego(newSquares[a], winner[i]);
                return
            }
        }
        // if (!newSquares.includes(null)) {
        //     finJuego(null, Array.from(Array(10).keys()));
        //     return
        // }
    } 
    
    const finJuego = (result) => {
        if (result !== null) {
            setPuntaje({
                ...puntaje,
                [result]: puntaje[result] + 1,
            })
        }
    }

    return (
        <div className='flex flex-col w-full md:w-[70%] lg:w-[50%] xl:w-[30%] mx-auto mt-28 md:p-12'>
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
    )
}

export default Tateti