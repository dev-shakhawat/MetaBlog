import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

export default function Logo({className}) {

  const themevalue = useSelector((state) => state.theme.value)
  return (
    <Link to={"/"} className={className}>
      <img src={themevalue === "light" ? "/logolight.png" : "/logodark.png" } alt="logo" className=' w-15 sm:w-25  ' />
    </Link>
  )
}
