import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoClose, IoGameControllerOutline, IoListOutline } from "react-icons/io5";

const Nav = () => {
    const [nav, setNav] = useState(false);
    
    const handleNav = () => setNav(!nav);

    return (
        <>
            <div className='w-full h-16 p-2 flex z-20 justify-around bg-gray-800'>
                <div className='flex flex-column'>
                    <Link to='/' className='flex text-gray-100 my-auto text-lg px-4 hover:text-orange-400'>
                        <IoGameControllerOutline size={25} className='my-auto mr-2'/>MultiJuegos
                    </Link>
                </div>
                <div className='my-auto'>
                    <ul className='hidden md:flex'>
                        <Link to='memotest' className='text-gray-100 my-auto text-lg px-4 hover:text-orange-400'>Memotest</Link>
                        <Link to='tateti' className='text-gray-100 my-auto text-lg px-4 hover:text-orange-400'>Tateti</Link>
                        <Link to='pokemon' className='text-gray-100 my-auto text-lg px-4 hover:text-orange-400'>Pokemon</Link>
                    </ul>
                </div>

                <div onClick={handleNav} className='md:hidden hover:cursor-pointer z-20 my-auto'>
                    {nav ? <IoClose size={28} className='text-white'/> : <IoListOutline size={28} className='text-white'/>}
                </div>
                
                <div className={nav ? 'z-10 lg:hidden fixed top-0 right-0 w-[60%] md:w-[35%] h-full bg-gray-800 ease-in duration-500' : 'z-10 lg:hidden fixed top-0 right-[-100%] w-[60%] md:w-[35%] h-full bg-black ease-in duration-500'}>
                    <ul className='pt-24 font-bold px-4 flex flex-col'>
                        <Link to='memotest' onClick={handleNav} className='p-4 text-gray-100 mx-2 text-center hover:text-orange-400 border-b border-b-white hover:scale-105 hover:cursor-pointer'>Memotest</Link>
                        <Link to='tateti' onClick={handleNav} className='p-4 text-gray-100 mx-2 text-center hover:text-orange-400 border-b border-b-white hover:scale-105 hover:cursor-pointer'>Tateti</Link>
                        <Link to='pokemon' onClick={handleNav} className='p-4 text-gray-100 mx-2 text-center hover:text-orange-400 border-b border-b-white hover:scale-105 hover:cursor-pointer'>Pokemon</Link>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default Nav