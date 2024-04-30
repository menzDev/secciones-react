import React from 'react'

const Header  = () => {
  return (
    <div className='flex justify-between flex-row '> 
        <h1 className='mb-[30px]'>news</h1>
        <div className='flex justify-center flex-row-reverse gap-[11px] mb-[33px]'>
            <img className='w-[46px] h-[44px]' src="/boton-derecha.png" alt="boton" />
            <img className='w-[46px] h-[44px] ' src="/boton-izquierda.png" alt="boton" />
        </div>
    </div>
  )
}

export default Header 