import React from 'react'
import { Outlet } from 'react-router'
import Nav from './nav/Nav'
import colorSchema from '../../colors/colorSchema'
import Footer from './footer/Footer'

export default function Layout() {

  const color = colorSchema()
  return (
    <div style={{background: color.bgprimary}} >
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
