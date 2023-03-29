import { useState, useEffect } from 'react'
import ColorCard from '../../Components/ColorCard/ColorCard'
import Utils from '../../Components/Utils/Utils';
import Swal from 'sweetalert2';

const init = {
    display: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: [],
}
const colorList = ['bg-green-600', 'bg-red-600', 'bg-blue-600', 'bg-yellow-400'];

const SimonDice = () => {

    const [on, setOn] = useState(false);
    const [play, setPlay] = useState(init);
    const [flash, setFlash] = useState('');

    const startHandle = () => {
        setOn(true)
    }

    useEffect(() => {
        if (on) {
            setPlay({ ...init, display: true })
        } else {
            setPlay(init)
        }
    }, [on])

    useEffect(() => {
        if (on && play.display) {
            let newColor = colorList[Math.floor(Math.random() * 4)];
            const copyColors = [...play.colors]
            copyColors.push(newColor);
            setPlay({ ...play, colors: copyColors })
        }
    }, [on, play.display])

    useEffect(() => {
        if (on && play.display && play.colors.length) {
            displayColors();
        }
    }, [on, play.display, play.colors.length])

    const displayColors = async () => {
        await Utils(1000)
        for (let i = 0; i < play.colors.length; i++) {
            setFlash(play.colors[i])
            await Utils(500)
            setFlash('')
            await Utils(500)

            if (i === play.colors.length - 1) {
                const copyColors = [...play.colors];

                setPlay({
                    ...play,
                    display: false,
                    userPlay: true,
                    userColors: copyColors.reverse(),
                });
            }
        }
    }

    const handleOnClick = async (color) => {
        if (!play.display && play.userPlay) {
            const copyUserColors = [...play.userColors];
            const lastColor = copyUserColors.pop();
            setFlash(color);

            if (color === lastColor) {
                if (copyUserColors.length) {
                    setPlay({ ...play, userColors: copyUserColors })
                } else {
                    setPlay({
                        ...play,
                        display: true,
                        userPlay: false,
                        score: play.colors.length,
                        userColors: [],
                    })
                }
            } else {
                await Utils(1000);
                setPlay({ ...init, score: play.colors.length })
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Perdiste',
                    text: `Puntos ${play.score}`,
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
        await Utils(1000);
        setFlash('')
    }

    const handleLost =()=>{
        setOn(false)
    }

    return (
        <div className="w-[200px] md:w-[400px] mx-auto">
            <div className='flex flex-wrap w-[200px] md:w-[400px] m-auto mt-20'>
                {colorList && colorList.map((e, key) => {
                    return (
                        <ColorCard color={e} key={key} flash={flash === e} onClick={() => { handleOnClick(e) }} />
                    )
                })}
            </div>
            {!on && !play.score && (
                <button onClick={startHandle} className='w-full p-4 rounded-b-md border hover:border-gray-600 text-[30px]'>Jugar</button>
            )}
            {on && (play.display || play.userPlay) && (
                <div className='w-full text-[50px] flex justify-center p-4'>{play.score}</div>
            )}
            {on && !play.display && !play.userPlay && play.score && (
                <div className='w-full text-[25px] p-4 rounded-b-md border hover:border-gray-600'>
                    <button onClick={handleLost} className='w-full'>Reiniciar</button>
                </div>
            )}
        </div>
    )
}

export default SimonDice