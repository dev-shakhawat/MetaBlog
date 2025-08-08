import React, { useEffect, useRef, useState } from 'react'
import colorSchema from '../../../../colors/colorSchema';

// icons
import { IoCheckmarkOutline } from "react-icons/io5";

export default function PostCategory({setCategory }) {

    const blogCategories = [
        "Technology",
        "Programming",
        "Web Development",
        "Mobile Development",
        "AI & Machine Learning",
        "Data Science",
        "Cybersecurity",
        "Startup",
        "Business",
        "Finance",
        "Marketing",
        "Design",
        "Photography",
        "Travel",
        "Food",
        "Health",
        "Fitness",
        "Lifestyle",
        "Self Improvement",
        "Productivity",
        "Education",
        "Career",
        "Books",
        "Movies",
        "Gaming",
        "Entertainment",
        "Politics",
        "Environment",
        "Science",
        "Spirituality",
        "Parenting",
        "Relationship",
        "History",
        "News",
        "Economy",
        "Personal Stories",
        "How-To Guides",
        "Opinion",
        "Reviews"
      ];

      const [selectedCategory, setSelectedCategory] = useState(blogCategories[0]);
      const color = colorSchema();
      const [isOpenCategory, setIsOpenCategory] = useState(false);
      const catagoryRef = useRef(null);

      const handleSetCategory = (category) => {
        setSelectedCategory(category);
        setCategory(category);
        setIsOpenCategory(prev => !prev);
      };

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (catagoryRef.current && !catagoryRef.current.contains(event.target)) {
            setIsOpenCategory(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);
      
  return (
    <div ref={catagoryRef} className='relative'>
        
        <div onClick={() => setIsOpenCategory(prev => !prev)} style={{background:   color.bgprimary}} className='flex items-center gap-2 w-fit py-1 px-5 rounded-[6px] cursor-pointer    font-work-sans font-medium text-base leading-6     '>

            <p style={{color: color.textprimary}} className="text-xs sm:text-sm md:text-base">Category:</p>

            <input  style={{color: color.textprimary}} type="text" value={selectedCategory }  className='outline-0 md:w-fit w-15 cursor-pointer text-xs sm:text-sm md:text-base   '  readOnly />

        </div>

        {/* all categories */}

        {isOpenCategory && <div  style={{background:   color.bgprimary}} className=' absolute top-9 left-0 w-full p-2  max-h-[200px] overflow-y-scroll    cursor-pointer  text-white font-work-sans font-medium text-base leading-6     '>

            {blogCategories.map((item, index) => {
                
                return <p style={{color: color.textprimary}} className='flex justify-between items-center hover:bg-[#4B6BFB]/10 px-2 ' key={index} onClick={() => handleSetCategory(item)}  ><span>{item}</span> {selectedCategory == item ? <IoCheckmarkOutline /> : ""} </p>
            })}

        </div>}


    </div>
  )
}
