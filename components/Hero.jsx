"use client"

import { heroVideo, smallHeroVideo } from '@/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(null);
  
  useEffect(() => {
    const handleVideoSrcSet = () => {
      if (window.innerWidth < 760) {
        setVideoSrc(smallHeroVideo);
      } else {
        setVideoSrc(heroVideo);
      }
    };

    handleVideoSrcSet(); // Set video source initially

    const handleResize = () => {
      handleVideoSrcSet();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: "1", delay: "2" }),
      gsap.to("#cta", {
        opacity: "1", delay:"2", y:"-50"
      }),
      gsap.to("#vid", {
        opacity: "1", delay:"0.3"
      })
  }, [])
    

  return (
    <section className='relative w-full nav-height bg-black'>
      <div className='flex-center flex-col w-full h-5/6'>
        <h1 id='hero' className='hero-title'>
          iPhone 15 Pro 
        </h1>
        <div id='vid' className="md:w-10/12 w-9/12 opacity-0">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <Link href="#highlight" className='btn'>
          Buy
        </Link>
        <p className='font-normal text-xl'>
          From $199/month or $999
        </p>

      </div>

    </section>
  )
}

export default Hero