import React, { useMemo, useState } from 'react'
import colorSchema from '../../../../colors/colorSchema'
import { useDispatch, useSelector } from 'react-redux';

// icons
import { IoCloseOutline } from "react-icons/io5";
import { HiPhoto } from "react-icons/hi2";
import { WiDaySunny } from "react-icons/wi";


// redux
import { poststatus , hasStatus } from '../../../../redux/slices/notificationSlice'; 
import { loadpost } from '../../../../redux/slices/postSlice';

// components
import PostCategory from './PostCategory';
import Status from '../../../common/Status';
import convertTime from '../../../../helpers/timeConverter';

export default function PostBox() {
 
    const color = colorSchema()
    const user = useSelector((state) => state.user.user);
    const postingstatus = useSelector((state) => state.notify.isPosting);
    const postStatus = useSelector((state) => state.notify.status);
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const [featuredImage , setFeaturedImage] = useState(null);
    const [category, setCategory] = useState('Technology');
    const dispatch = useDispatch();
    
    
    

    const setImageUrl = (file) => {
        
        if(file){
            setFeaturedImage(file);
            const url = URL.createObjectURL(file);
            setImage(url);
        }else{
            setImage(null);
        }
    }
    
    const handlePostSubmit = () => {

        dispatch(poststatus(true));

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', text);
        formData.append('featuredImage', featuredImage);
        formData.append('author', user.id);
        formData.append('publishedAt',  convertTime(new Date()));
        formData.append('category',  category);
        

        fetch(`${import.meta.env.VITE_BASE_URL}/post/addPost`, {
            method: 'POST', 
            credentials: 'include',
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            dispatch(poststatus(false));
            dispatch(hasStatus(data));
            dispatch(loadpost());
            setTimeout(() => {
                dispatch(hasStatus(null)); 
            }, 2500);
            if(data.status === true){ 
                handleClosePost();
            }
          })
          .catch(error => {
            dispatch(poststatus(false));
            dispatch(hasStatus(error));
            setTimeout(() => {
                dispatch(hasStatus(null)); 
            }, 2500);
          });
    }

    const handleClosePost = () => {
        setTitle("");
        setText("");
        setImage(null);
        setFeaturedImage(null);
        setCategory("Technology");
        setIsOpen(false);
    }

  return ( 
    <div style={{background: color.bgsecondary , height: isOpen ? "auto" : "auto"  }} className={` relative  duration-300 ease-in-out   p-2 rounded-[10px] mt-5 `}>

        {postStatus && <Status status={postStatus.status} message={postStatus.sms} />}
        
        {/* poster information */}
        <div className="flex items-center gap-2 cursor-pointer ">
            {/* poster pic */}
            <img src={user?.photoURL} alt="poster" className=' w-9 h-9 rounded-full    ' />

            {/* poster name */}
            <h2 onClick={() => setIsOpen(true)} style={{color: color.textprimary}} className=" font-work-sans font-semibold text-base flex items-center gap-2 flex-1  ">
                {!isOpen && <span>hey,</span>}
                <span>{user?.name}</span>
                {!isOpen && <span>Post about something...</span>}
            </h2>

            {/* post box close button */}
            {isOpen && <button onClick={handleClosePost} type='button' style={{color: color.textprimary}} className='  cursor-pointer  text-3xl  '  ><IoCloseOutline/></button>}
        </div>

        {/* post box text */}

        {/* title */}
        {isOpen && <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" style={{color: color.textprimary}} placeholder='Title' className=' w-full font-bold outline-0 mt-2 text-sm    ' />}


        {/* description */}
        {isOpen && <textarea  value={text} onChange={(e) => setText(e.target.value)} style={{color: color.textprimary}} placeholder='Description...' className=' w-full h-[150px] resize-none outline-0 mt-2 text-sm    ' />}


        {/* image */}
        {isOpen && image &&  <img src={image} alt="image" className=' w-full resize-none outline-0 md:w-[400px] h-[200px] object-cover     ' />}

        {/* add image and post */}
        {isOpen && <div className="flex justify-between mt-2">
             
             <div className="flex items-center gap-5 ">

                {/* add image */}
                {isOpen && <div className='w-fit cursor-pointer relative'>
                    <button type="button" className='text-3xl  text-[#1DA1F2]   '><HiPhoto/></button>
                    <input onChange={(e) => setImageUrl(e.target.files[0])} type="file" className=' w-full h-full resize-none outline-0 absolute top-0 left-0 opacity-0    ' />
                </div>}

                {/* add category */}
                <PostCategory setCategory={setCategory}   />
 
             </div>

            {/* post button */}
            {isOpen && <button onClick={handlePostSubmit} style={{background:  (title || text) && featuredImage ? "#4B6BFB" : color.bgprimary , color: (title || text) && featuredImage ? color.switchtext : color.textprimary}} className=' py-2 px-5 rounded-[6px] cursor-pointer  text-white font-work-sans font-medium text-base leading-6 flex items-center gap-2   '  type="button">
            <span>Post</span>
            {postingstatus && <WiDaySunny className='text-xl animate-rotate  '/>}
            </button>}

        </div>}




    </div>
  )
}
