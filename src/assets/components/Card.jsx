import React from 'react'

const Card = () => {

  const perfiles = [
    {
      img: "/jugador-africano.jpeg",
      carreras: "GIVEAWAY",
      descripcion: "Gear up for victory! Join FasterUI Esports giveaway and enter to win a premium gaming keyboard."
    },
    {
      img: "/jugador-asiatico.jpeg",
      carreras: "ACADEMY TEAM",
      descripcion: "Our Academy Team receives invaluable mentorship from experienced seniors, guiding them to success in their careers."
    },
    {
      img: "/jugadora-negra.jpeg",
      carreras: "FEMALE TEAM",
      descripcion: "We’re proud to announce the expansion into female divisions, paving the way for new champions to rise."

    }
  ]

  return (
    <div className='flex justify-center flex-col lg:flex-row gap-[32px]'>
      {perfiles.map((item, index)=>(
      <div key={index}>
          <img className='w-full lg:w-[384px] h-[393px] grayscale object-cover' src={item.img} alt="avatar" />
                 <div className=' w-full lg:w-[384px] h-[191px] bg-[#000000] text-white pt-[25px] '>
                 <h2 className='text-[22px] font-extrabold ml-[30px] mb-[10px]' >{item.carreras}</h2>
                 <p className='ml-[30px] w-[299px]  text-[14px] font-medium font-montserrat mb-[27px] '>{item.descripcion}</p>
                 <div className='w-[324px] h-[21px] bg-[#FF0000] ml-[30px]'><h2 className=' ml-[8px] text-[14px] font-extrabold'>Learn more</h2>
                 <p></p>
                 </div>
                 </div>
        </div>

      ))}
       
    </div>
  )
}

export default Card

  {/*  <img className='w-[384px] h-[396px]' src="./public/jugador-africano.jpeg" alt="" />
          <div className='w-[384px] h-[191px] ] text-white'>
              <h2 className='text-[22px] font-extrabold ml-[30px]' >GIVEAWAY</h2>
              <p className='ml-[30px] w-[299px]  text-[14px] font-medium font-montserrat '>Gear up for victory! Join FasterUI Esports giveaway and enter to win a premium gaming keyboard.</p>
          </div */}