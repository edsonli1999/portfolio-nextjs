"use client"
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

type Props = { isSmallScreen: boolean }

function Hero({ isSmallScreen }: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, my name’s Edson", "Loves-bouldering.tsx", "<ButLovesToCodeMore/>", "Allegedly;"],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full object-cover"
        src="/Professional_headshot 2.jpg"
        alt=""
        width="150"
        height="100"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px]">Computer Science Graduate</h2>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px]">University of Melbourne</h2>
        <h1 className="text-2xl lg:text-5xl md:text-4xl font-semibold px-10 font-mono">
          <span>{text}</span>
          <Cursor cursorColor="#1e95aa" />
        </h1>
        <div className="pt-5">
          {isSmallScreen ? (
            <>
              <Link href="/About-page">
                <button className="heroButton">About</button>
              </Link>
              <Link href="/Experience-page">
                <button className="heroButton">Experience</button>
              </Link>
              <Link href="/Projects-page">
                <button className="heroButton">Projects</button>
              </Link>
              {/* Add in link button to contacts page here */}
              <Link href="#contact">
                <button className="heroButton">Contact</button>
              </Link>
              <div className="text-sm text-gray-400 pb-2 tracking-[3px] m-10 space-y-5">
                <h1>
                  Projects section is not viewable on smaller screens yet unfortunately.
                </h1>
                <h1>Please note that some elements may not be properly displayed, especially in landscape.</h1>
                {/* Add in 'scroll down for more' indication here */}
                <div className="text-right">
                  <span className="inline-block px-3 py-2 rounded-full text-white bg-gray-700">v</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link href="#about">
                <button className="heroButton">About</button>
              </Link>
              <Link href="#experience">
                <button className="heroButton">Experience</button>
              </Link>
              <Link href="#projects">
                <button className="heroButton">Projects</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
