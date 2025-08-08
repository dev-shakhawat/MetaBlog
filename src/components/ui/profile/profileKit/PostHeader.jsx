import React from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// color
import colorSchema from "../../../../colors/colorSchema";
import { isSelectedAll } from "../../../../redux/slices/postSlice";

// icons
import { CiTrash } from "react-icons/ci";

// finction 
import DeletePost from "../../../../helpers/deletePost";

export default function PostHeader({isSelection = false}) {

    const color = colorSchema();
    const selectedAll = useSelector((state) => state.post.selectall);
    const dispatch = useDispatch();
    const selectedItems = useSelector((state) => state.post.seledtedItems);
     
    
    
  return (
    <div style={{ color: color.textprimary }} className="  mt-5 font-work-sans font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm flex items-center justify-between    "  >
      <span>Your Posts</span>

{  isSelection &&    <div className="flex items-center gap-2  ">
        <button onClick={() => dispatch(isSelectedAll(!selectedAll))} type="button" className=" cursor-pointer selection-none      " >
           {selectedAll ? "Deselect All" : "Select All"}
        </button>

        {selectedAll && <button onClick={()=> DeletePost(selectedItems , dispatch )}  type="button" className="cursor-pointer  px-5 py-1 bg-blue-500 rounded-[5px] selection-none "><CiTrash/></button>}
      </div>}

    </div>
  );
}
