import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

export default function Logo() {

  const themevalue = useSelector((state) => state.theme.value)
  return (
    <Link to={"/"} className='flex-1'>
      <img src={themevalue === "light" ? "/logolight.png" : "/logodark.png" } alt="logo" />
    </Link>
  )
}
