import { navLists } from '@/constants'
import { appleImg, bagImg, searchImg } from '@/utils'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
      <header className='py-5 px-5 flex w-full items-center justify-between sm:px-10 '>
          <nav className='w-full flex screen-max-width'>
              <Image src={appleImg} alt='Apple' height={14} width={18} />

              <div className='flex flex-1 justify-center items-center max-sm:hidden'>
                  {
                      navLists.map((nav) => (
                          <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                              {nav}
                          </div>                        
                      ))
                  }
              </div>

              <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <Image src={searchImg} alt='search' height={14} width={18} />
                <Image src={bagImg} alt='bagx' height={14} width={18} />

              </div>
          </nav>
    </header>
  )
}

export default Navbar