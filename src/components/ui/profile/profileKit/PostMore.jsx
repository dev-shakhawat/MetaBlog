import React from 'react'


// icons
import { LiaShareSolid } from "react-icons/lia";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

// function
import DeletePost from '../../../../helpers/deletePost';
import colorSchema from '../../../../colors/colorSchema';
import { useDispatch } from 'react-redux';



export default function PostMore({postID}) {

    const color = colorSchema();
    const dispatch = useDispatch();

    console.log(postID);
    

  return (
    <div onClick={(e) => e.stopPropagation()} style={{color: color.textprimary , background: color.bgprimary   }} className='  rounded-[5px] flex flex-col absolute top-8 right-0    '> 
        <button type="button" className='flex items-center gap-2 py-1 px-2 cursor-pointer    ' >
            <LiaShareSolid/>
            <span>Share</span>
        </button>
        <button type="button" className='flex items-center gap-2 py-1 px-2 cursor-pointer    ' >
            <CiEdit/>
            <span>Edit</span>
        </button>
        <button onClick={() => DeletePost( [postID] , dispatch )} type="button" className='flex items-center gap-2 py-1 px-2 cursor-pointer    ' >
            <CiTrash/>
            <span>Delete</span>
        </button>
    </div>
  )
}
