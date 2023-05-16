import React from 'react'
import Navigation from '../Navigation/index'

function Footer() {
  return (
    <footer
    className="w-full h-auto flex flex-nowrap justify-center items-center gap-6"
    >
        <Navigation 
        url="/"
        planet="bg-earth"
        />
        <Navigation 
        url="/portfolio/"
        planet="bg-jupiter"
        />
        <Navigation 
        url="/experiences/"
        planet="bg-mars"
        />
        <Navigation 
        url="/contact/"
        planet="bg-moon"
        />
    </footer>
  )
}



export default Footer