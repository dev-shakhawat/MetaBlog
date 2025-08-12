import React from 'react'
import SideContactCard from './SideContactCard'


// icons
import { FaBuilding } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { Link } from 'react-router';
import colorSchema from '../../../colors/colorSchema';

export default function SideContact() {

    const color = colorSchema();

  return (
    <div className='flex-1 flex flex-col sm:flex-row lg:flex-col flex-wrap  '>
        
        <SideContactCard logo={<FaBuilding className='text-2xl opacity-50 ' />} title='Company information:'  text="Jadurchar , Rowmari"  />
        
        <SideContactCard logo={<TiLocation className='text-2xl opacity-50 ' />} title='Address:'  text="Bangladesh, Rangpur, Kurigram , Rowmari , Code/Postal:5640"  />
        
        <SideContactCard logo={<IoCall className='text-2xl opacity-50 ' />} title='Call us:'  text="Call us to speak to a member of our team. We are always happy to help."  />
    
        <Link  to={`tel:0123456789`} className='basis-1/1  text-blue-500 font-work-sans font-semibold text-base leading-6   w-full text-center inline-block   '>0123456789</Link>

    </div>
  )
}
