import React, { useState } from 'react'
import colorSchema from '../../../colors/colorSchema';


// icons
import { BsCopy } from "react-icons/bs";
import { CiTrash } from "react-icons/ci";
import { CiWarning } from "react-icons/ci";

// redux
import { useDispatch, useSelector } from 'react-redux';
import { addtoSelectedItems } from '../../../redux/slices/postSlice';
import { useNavigate } from 'react-router';
import DeletePost from '../../../helpers/deletePost';

export default function More({className , posterId , postID}) {

    const color = colorSchema();
    const userInfo = useSelector((state) => state.user.user); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    // copy link
    const [copy , setCopy] = useState("Copy link");
    const handleCopyLink = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopy("Copied");
        setTimeout(() => {
          setCopy("Copy link");
        }, 1000);
      } catch (err) {
        console.error("Failed to copy link:", err);
      }
    };

    const handleDeletePost = async () => { 
        try {
          let selectedfordelete = [postID]; 
          await DeletePost(selectedfordelete, dispatch);
          navigate(-1);
        } catch (error) {
          console.log("Failed to delete post:", error);
        } 
    }

    

  return (
    <div style={{background: color.bgsecondary}} className={`${className} absolute  p-2 rounded-[5px]        `}>
        
        <button style={{color: color.textsecondary}} onClick={handleCopyLink}  type="button" className='w-full flex items-center gap-2 hover:bg-gray-50/10 py-1 px-2 cursor-pointer rounded-[5px]  '><BsCopy/> <span>{copy}</span></button>
        
        {posterId === userInfo?.id && <button onClick={handleDeletePost}  style={{color: color.textsecondary}}  type="button" className='w-full flex items-center gap-2 hover:bg-gray-50/10 py-1 px-2 cursor-pointer rounded-[5px]  '><CiTrash className='text-[22px]'/> <span>Delete Post</span></button>}

        <button style={{color: color.textsecondary}}  type="button" className='w-full flex items-center gap-2 hover:bg-gray-50/10 py-1 px-2 cursor-pointer rounded-[5px]  '><CiWarning className='text-[22px]'/> <span>Report Post</span></button>

    </div>
  )
}
