"use client"
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link';


type Props = {}

// Uses a typewriter library for the typewriter effect, Sonny uses react-simple-typewriter.

function Hero({}: Props) {
  //useEffect thing from the typewriter library
  const [text, count] = useTypewriter({
    words: ["Hi, my name's Edson", 
    "Loves-bouldering.tsx", 
    "<ButLovesToCodeMore/>",
    "Allegedly;"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'> 
      <BackgroundCircles/>
      {/* Need to change this img from a hardsource to another URL */}
      <Image
        className='relative rounded-full object-cover'
        src='/Professional_headshot 2.jpg'
        alt=''
        width="150" 
        height="100"/>
      <div className='z-20'> 
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[5px]'> Computer Science Graduate </h2>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[5px]'> University of Melbourne </h2>
        <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
          <span> {text} </span>
          <Cursor cursorColor='#1e95aa'/>
        </h1>

        {/* <div className='pt-5'>
          <Link href='#about'><button className='heroButton'>About </button></Link>
          <Link href='#experience'><button className='heroButton'>Experience </button></Link>
          <Link href='#skills'><button className='heroButton'>Skills </button></Link>
          <Link href='#projects'><button className='heroButton'>Projects </button></Link>
        </div> */}
      </div>
      
    </div>
  )
}

export default Hero