import { projects } from '@/Data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { TiThLarge } from 'react-icons/ti'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'
import { ImGift } from 'react-icons/im'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
      <div className='heading'>
        A small section of {''}
        <span className='text-purple'>Recent Projects</span>
      </div>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-7 mt-10'>
        {projects.map(({id, title, des, img, iconLists,link} ) => (
          <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] sm:w-[570px] flex items-center justify-center w-[80vw]'>
            <PinContainer title={title} href={link}>
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] lg:h-[30vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img src='./bg.png' alt='bg-img'/>
                </div>
                <img src = {img}
                 alt = {title} 
                 className='z-10 absolute bottom-0'/>
              </div>
              <h1 className='font-bold lg:text-3xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>
              <div className='flex items-center mt-7 mb-3'>
                {iconLists.map((icon, index)=>(
                 <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-10 h-10 flex justify-center items-center'
                 style={{
                  transform:`translateX(-${5 * index * 2} px)`
                  }}>
                  <img src={icon} alt={icon} className="p-2"/>
                 </div>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <a
                key={id}
                target='_blank'
                href={link}
                rel='noopener noreferrer'
                >
                <p className="flex lg:text-xl md:text-xs text-sm text-purple"> Check Live Site
                  <FaLocationArrow className='ms-3' color='#CBACF9'/> 
                </p>
                 
                </a>
                
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects