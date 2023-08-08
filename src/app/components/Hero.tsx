"use client"
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';


type Props = {}

// Uses a typewriter library for the typewriter effect, Sonny uses react-simple-typewriter.

function Hero({}: Props) {
  //useEffect thing from the typewriter library
  const [text, count] = useTypewriter({
    words: ["Hi, my name's Edson", 
    "Guy-who-boulders.tsx", 
    "<ButLovesToCodeMore/>"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'> 
      <BackgroundCircles/>
      <h1>
        <span> {text} </span>
        <Cursor cursorColor='#1e95aa'/>
      </h1>
    </div>
  )
}

export default Hero