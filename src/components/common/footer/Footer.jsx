import React from "react";
import Container from "../Container";
import { Link } from "react-router";
import { LuMail } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import Logo from "../Logo";
import colorSchema from "../../../colors/colorSchema";

export default function Footer() {
    
    const color = colorSchema();

  return (
    <div style={{background: color.bgprimary}} className=" mt-25 pt-16 px-1   ">
      <Container>
        <div className="flex lg:flex-nowrap flex-wrap   ">
            {/* about */}
            <div className="flex-2 basis-1/1 sm:basis-1/2  ">
                <h2 style={{color: color.textprimary}} className=" font-work-sans font-medium xl:text-xl lg:text-[18px] text-base    ">About</h2>
                <p style={{color: color.textprimary }} className=" font-work-sans font-normal lg:text-base text-sm   xl:mt-6 md:mt-4 mt-2  md:w-3/4  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>


                <ul style={{color: color.textprimary}} className="flex flex-col  xl:mt-10 lg:mt-8 md:mt-6 mt-2  ">
                    <li className="flex items-center lg:text-[18px] md:text-base text-sm gap-1 ">
                        <span className="font-semibold">Email: </span>
                        <Link className="font-normal" to={`mailto:info@jstemplate.net`}>info@jstemplate.net</Link>
                    </li>
                    <li className="flex items-center lg:text-[18px] md:text-base text-sm gap-1 ">
                        <span className="font-semibold">Phone: </span>
                        <Link className="font-normal" to={`mailto:info@jstemplate.net`}> 880 123 456 789</Link>
                    </li>
                </ul>
            </div>

            {/* links quick */}
            <div className="flex-1 mt-5 sm:mt-0 sm:basis-1/2 sm:pl-20 ">
              <h2 style={{color: color.textprimary}} className="font-work-sans font-medium xl:text-xl lg:text-[18px] text-base    ">Quick Link</h2>
              <ul className="md:mt-6 sm:mt-3 mt-2 flex flex-col gap-1  ">
                <li style={{color: color.textprimary}} className="font-work-sans font-normal text-base"><Link to={``}>Home</Link></li>
                <li style={{color: color.textprimary}} className="font-work-sans font-normal text-base"><Link to={``}>About</Link></li>
                <li style={{color: color.textprimary}} className="font-work-sans font-normal text-base"><Link to={``}>Blog</Link></li>
                <li style={{color: color.textprimary}} className="font-work-sans font-normal text-base"><Link to={``}>Archived</Link></li> 
                <li style={{color: color.textprimary}} className="font-work-sans font-normal text-base"><Link to={``}>Author</Link></li> 
                <li style={{color: color.textprimary}} className="font-work-sans font-normal text-base"><Link to={``}>Contact</Link></li> 
              </ul>

            </div>

            {/* category */}
            <div className="flex-1 sm:basis-2/5 mt-5 md:mt-0">
            <h2 style={{color: color.textprimary}} className=" font-work-sans font-medium xl:text-xl lg:text-[18px] text-base   ">Category</h2>
              <ul className="md:mt-6 sm:mt-3 mt-2 flex flex-col gap-1">
                <li style={{color: color.textprimary}} className="font-work-sans font-normal text-base "><Link to={``}>Lifestyle</Link></li>
                <li style={{color: color.textprimary}} className="font-work-sans font-normal text-base "><Link to={``}>Technology</Link></li>
                <li style={{color: color.textprimary}} className="font-work-sans font-normal text-base "><Link to={``}>Travel</Link></li>
                <li style={{color: color.textprimary}} className="font-work-sans font-normal text-base "><Link to={``}>Business</Link></li>
                <li style={{color: color.textprimary}} className="font-work-sans font-normal text-base "><Link to={``}>Economy</Link></li>
                <li style={{color: color.textprimary}} className="font-work-sans font-normal text-base "><Link to={``}>Sports</Link></li> 
              </ul>
            </div>

            {/* newsletter */}
            <div className="flex-2 basis-1/1 sm:basis-3/5 sm:mt-8 mt-5 lg:mt-0  ">

                <div style={{background: color.bgsecondary}} className="px-9 py-8   rounded-[10px] ">
                    <h2 style={{color: color.textprimary}} className=" font-work-sans font-medium xl:text-xl lg:text-[18px] text-base text-center ">Weekly Newsletter</h2>
                    <p style={{color: color.textsecondary}} className="mt-2 font-work-sans font-normal md:text-base text-sm  text-center">Get blog articles and offers via email</p>

                    <div className="md:mt-7.5 sm:mt-5 mt-3  ">
                       <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-[10px]  ">
                          <FaRegUser className="text-xl  text-gray-500  "/>
                          <input style={{color: color.textprimary}} type="text" placeholder="Your Name" className="flex-1 outline-0  text-xs sm:text-sm md:text-base   " />
                       </div>
                       <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-[10px] mt-2  ">
                          <LuMail className="text-xl  text-gray-500  "/>
                          <input style={{color: color.textprimary}} type="email" placeholder="Your Email" className="flex-1 outline-0 text-xs sm:text-sm md:text-base    " />
                       </div>

                    </div>

                    <button style={{background: '#4B6BFB'}} type="button" className=" cursor-pointer py-3 rounded-[10px] w-full font-work-sans font-medium text-xs sm:text-sm md:text-base mt-2 text-white    "  >Subscribe</button>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-between py-3 mt-3 border-t border-gray-200 "> 
               <Logo className={`hidden md:inline-block`} />
                <p style={{color: color.textprimary}} className="font-work-sans font-normal text-xs sm:text-sm md:text-base   ">© JS Template 2023. All Rights Reserved.</p>

                <ul className="flex items-center gap-5 ml-5  ">
                    <li style={{color: color.textprimary}} className="font-work-sans font-normal text-xs sm:text-sm md:text-base  ">
                        <Link to={'terms'}>Terms of Use</Link>
                    </li>
                    <li style={{color: color.textprimary}} className="font-work-sans font-normal text-xs sm:text-sm md:text-base  ">
                        <Link to={'privacy'}>Privacy Policy</Link>
                    </li>
                </ul>
        </div>


      </Container>
    </div>
  );
}