import React from 'react'

type Props = {
  text: string
  alternate_text: string
  onClick:() => void
}

function Button(props: Props) {

  return (
    <button
      onClick={props.onClick}
      role="button"
      className="
      p-4
      w-auto
      relative
      inline-block
      leading-4
      overflow-hidden
      cursor-pointer
      bg-white
      rounded
      select-none
      touch-manipulation
      after:content-['']
      after:absolute
      after:-bottom-1/2
      after:left-0
      after:w-[101%]
      after:h-full
      after:bg-black
      after:origin-[bottom_center]
      after:transition-transform
      after:duration-[600ms]
      after:ease-in-out
      after:skew-y-[9.3deg]
      after:scale-y-0
      after:z-50
      hover:after:origin-[bottom_center]
      hover:after:skew-y-[9.3deg]
      hover:after:scale-y-[2]
      max-[350px]:p-2
      group
      "
    >
      <span
        className="
        whitespace-nowrap
        font-p
        text-md
        w-full
        relative
        transition-colors
        duration-[600ms]
        ease-in-out
        z-10
        text-gray-950
        max-[350px]:text-sm
        "
      >{props.text}</span>
      <span
        className="
        whitespace-nowrap
        text-white
        block
        text-md
        absolute
        bottom-0
        transition-all
        duration-[500ms]
        ease-in-out
        z-[100]
        opacity-0
        top-1/2
        left-1/2
        -translate-y-1/2
        -translate-x-1/2
        h-3.5
        leading-3
        max-[350px]:text-sm
        group-hover:opacity-100
        group-hover:transition-all
        group-hover:duration-[900ms]
        group-hover:ease-in-out
        "
      >{props.alternate_text}</span>
    </button>
  )
}

export default Button