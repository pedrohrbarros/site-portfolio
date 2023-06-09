import React from 'react'
import Link from 'next/link'

type Props = {
  url: string
  planet: string
}

function Navigation(props: Props) {
  return (
    <Link
      href={props.url}
    >
      <div
      className={`shadow-[-5px_-5px_5px_black_inset,_2px_2px_8px_white_inset] ${props.planet} w-[4em] h-[4em] bg-cover bg-no-repeat bg-center animate-rotate rounded-[50%] z-999 hover:scale-125 transition-all duration-[200ms]`}
      />
    </Link>
  )
}

export default Navigation