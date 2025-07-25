import React from 'react'
import Container from '../Container'
import Logo from '../Logo'
import NavLinks from './NavLinks'
import ThemeSwitcher from './ThemeSwitcher'
import NavSearch from './NavSearch'

export default function Nav() {
  return (
    <Container>
        
        {/* nav */}
        <div className="flex py-8   ">

            {/* logo */}
            <Logo/>
            
            
            {/* nav links */}
            <NavLinks/>

            <div className="flex-1 flex gap-10 items-center ">
                <NavSearch/>
                <ThemeSwitcher/>
            </div>

        </div>
    </Container>
  )
}
