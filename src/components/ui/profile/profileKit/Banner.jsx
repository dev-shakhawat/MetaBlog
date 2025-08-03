import React from 'react'
import colorSchema from '../../../../colors/colorSchema';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

export default function Banner() {

    const color = colorSchema();
    const user = useSelector((state) => state.user.user);

  return (
    <div className='mt-5'>
        
        {/* profile pic */}
        <img src={`http://${user?.photoURL}`} alt="profile" className=" w-[100px] rounded-full mx-auto  " />
        
        {/* profile name */}
        <h2 style={{color: color.textprimary}} className=" font-work-sans font-bold text-3xl text-center mt-5   ">{user?.name}</h2>

        {/* profile email */}
        <Link to={`mailto:${user?.email}`} style={{color: color.textsecondary}} className=" inline-block w-full text-center font-work-sans font-semibold text-base mt-1   ">{user?.email}</Link>

    </div>
  )
}
