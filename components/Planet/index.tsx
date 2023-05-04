import React from 'react'

type Props = { 
    planet: string
    shadow: string
}

function Planet(props: Props) {

  return (
    <div
    className={`
    ${props.shadow}
    ${props.planet}
    w-[30vw]
    h-[30vw]
    max-[1060px]:w-[30em]
    max-[1060px]:h-[30em]
    max-[540px]:w-[15em]
    max-[540px]:h-[15em]
    bg-cover
    bg-no-repeat
    bg-center
    animate-rotate
    rounded-[50%]
    z-999
    `}
    />
  )
}

export default Planet