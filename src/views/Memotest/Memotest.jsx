import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const imagenes = [
  'https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/c-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/git-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/react-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/python-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/php-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/mysql-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/github-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/docker-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/cplusplus-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/bower-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/drupal-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/gimp-original.svg?size=128&color=currentColor'
].flatMap((image) => [`a|${image}`, `b|${image}`]).sort(() => Math.random() - 0.5);
/*
*** flatMap me sirve para poder duplicar las imagenes ya que devuelve un array plano
*** en conjunto con Math.random consigo el efecto necesario
*/

const Memotest = () => {
  const [encontrados, setEncontrados] = useState([]);
  const [elegido, setelegido] = useState([]);

  useEffect(() => {
    if (elegido.length === 2) {
      if (elegido[0].split('|')[1] === elegido[1].split('|')[1]) {
        setEncontrados((encontrados) => encontrados.concat(elegido))
      }

      setTimeout(() => setelegido([]), 1000);
    }
  }, [elegido]);

  useEffect(() => {
    if (encontrados.length === imagenes.length) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ganaste',
        showConfirmButton: false,
        timer: 2000
      })
      setTimeout(() => reload(), 2000)
    }
  }, [encontrados])
  
  const reload =()=> {
    setEncontrados([]);
      setelegido([]);
  }

  return (
    <div className="-mt-2 w-full bg-[url('./img/fondoComun.jpg')] bg-no-repeat bg-cover bg-center h-[100vh]">
      <h1 className='text-center text-[25px] font-serif text-gray-900 uppercase mt-2'>Memotest</h1>
      <ul className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-1 md:gap-4 md:w-[80%] mx-auto p-6'>
        {imagenes.map((img) => {
          const [, url] = img.split('|');

          return (
            <li
              onClick={() => elegido.length < 2 && setelegido((elegido) => elegido.concat(img))}
              key={img}
              className='border-2 border-black cursor-pointer hover:shadow-xl hover:shadow-gray-600 bg-blue-200 mx-auto p-2 rounded-full'>
              {encontrados.includes(img) || elegido.includes(img) ? (
                <img src={url} alt='icons'/>
              ) : (
                <img src='https://icongr.am/clarity/help.svg?size=128&color=currentColor' alt='icons' />
              )}
            </li>
          )
        })}

      </ul>
    </div>
  )
}

export default Memotest