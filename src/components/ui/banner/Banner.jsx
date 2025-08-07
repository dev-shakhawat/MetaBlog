import React from "react"; 
import PostDetails from "../../common/PostDetails";

export default function Banner() {
  return (
    <div className="relative rounded-[10px]  xl:pt-30 lg:pt-25 md:pt-20 sm:pt-15 pt-12  ">
      <img src="/banner.png" alt="banner" className=" w-full  " />

      <PostDetails className={`shadow-lg absolute xl:-bottom-16 lg:-bottom-10 md:-bottom-8 -bottom-6 xl:left-16 lg:left-14 md:left-10 sm:left-7 left-5 lg:w-2/5 hidden md:block p-10  border border-gray-50/10`} tag="technology" title={`The Impact of Technology on the Workplace: How Technology is Changing` } postername="John Doe" postdate="March 12, 2023"  />
    </div>
  );
}
