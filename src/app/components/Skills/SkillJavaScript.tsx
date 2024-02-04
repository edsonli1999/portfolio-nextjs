import React from 'react'
import { motion } from 'framer-motion'


type Props = {
  // directionLeft?: boolean;
}

function Skill({}: Props) {
  return (
    <div className='group relative flex'>
      <motion.img
        initial={{
          opacity:0
        }}
        transition={{ duration:1 }}
        whileInView={{ opacity:1, x:0 }}
        src='https://cdn.iconscout.com/icon/premium/png-512-thumb/javascript-2752148-2284965.png?f=webp&w=256'
        className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-22 md:h-22 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
    </div>
    
  )
}

export default Skill