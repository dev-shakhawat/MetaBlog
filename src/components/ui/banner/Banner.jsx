import React from "react"; 
import PostDetails from "../../common/PostDetails";

export default function Banner() {
  return (
    <div className="relative rounded-[10px] pt-30  ">
      <img src="/banner.png" alt="banner" className=" w-full  " />

      <PostDetails className={`shadow-lg absolute -bottom-16 left-16 w-2/5 p-10  border border-gray-50/10`} tag="technology" title={`The Impact of Technology on the Workplace: How Technology is Changing` } postername="John Doe" postdate="March 12, 2023"  />
    </div>
  );
}
