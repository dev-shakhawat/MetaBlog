import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import colorSchema from '../../../colors/colorSchema';
import {themeSwitch} from '../../../redux/slices/themeSlice';

// icons
import { PiSunFill } from "react-icons/pi";

export default function ThemeSwitcher() {
  const themevalue = useSelector((state) => state.theme.value)
  const color = colorSchema() 
  const dispatch = useDispatch()

  const handleThemeSwitch = () => {
    const newTheme = themevalue === "light" ? "dark" : "light";
    dispatch(themeSwitch(newTheme));
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };
  
  
  return (
    <div onClick={handleThemeSwitch}  style={{background: color.switchbg}} className={`${themevalue === "light" ? "justify-start" : "justify-end"} transition-all duration-200 w-12 h-7   rounded-[100px] p-0.5 cursor-pointer flex    `}>
      <div className=" w-6 h-6 rounded-full bg-white shadow-sm grid place-items-center transition-all duration-200 "><PiSunFill/></div>
    </div>
  )
}
