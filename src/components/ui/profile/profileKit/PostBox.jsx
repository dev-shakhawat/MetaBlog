import React, { useEffect, useMemo, useState } from 'react'
import colorSchema from '../../../../colors/colorSchema'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// icons
import { IoCloseOutline } from "react-icons/io5";
import { HiPhoto } from "react-icons/hi2";
import { TbLoaderQuarter } from "react-icons/tb";


// redux
import { poststatus , hasStatus } from '../../../../redux/slices/notificationSlice'; 
import { loadpost } from '../../../../redux/slices/postSlice';

// components
import PostCategory from './PostCategory';
import Status from '../../../common/Status';
import convertTime from '../../../../helpers/timeConverter';


// functions
import editPost from '../../../../helpers/editPost';

export default function PostBox({className = "relative" , open , closeFunction , fetchData}) {
 
    const color = colorSchema()
    const user = useSelector((state) => state.user.user);
    const postingstatus = useSelector((state) => state.notify.isPosting);
    const postStatus = useSelector((state) => state.notify.status);
    const isEdit = useSelector((state) => state.post.isEdit);
    const [isOpen, setIsOpen] = useState(open || false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const [featuredImage , setFeaturedImage] = useState(null);
    const [category, setCategory] = useState('Technology');
    const [prevImage , setPrevImage] = useState("");
    const dispatch = useDispatch();
    

    useEffect(() => { 
        if(fetchData){
            (async function() {
                const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/post/getPostbyID/${isEdit.id}`, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                const post = data.data.post; 

                setTitle(post.title);
                setText(post.description);
                setImage(post.featuredImage);
                setCategory(post.category);
                setPrevImage(post.featuredImage);
                
            })();
        }
    }, []);
    
    
    
    const setImageUrl = (file) => {
        
        if(file){
            setFeaturedImage(file);
            const url = URL.createObjectURL(file);
            setImage(url);
        }else{
            setImage(null);
        }
    }
    
    const handlePostSubmit = async () => {
        dispatch(poststatus(true));
        
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', text);
            formData.append('featuredImage', featuredImage);
            formData.append('author', user.id);
            formData.append('publishedAt', convertTime(new Date()));
            formData.append('category', category);
            
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/post/addPost`, 
                formData,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
    
            const data = response.data;
            console.log(response);
            console.log(data);
            
            dispatch(poststatus(false));
            dispatch(hasStatus(data));
            dispatch(loadpost());
            
            setTimeout(() => {
                dispatch(hasStatus(null)); 
            }, 2500);
            
            if(data.status === true) {
                handleClosePost();
            }
        } catch (error) {
            console.error('Post submission error:', error);
            dispatch(poststatus(false));
            
            const errorMessage = error.response?.data?.sms || 
                               error.message || 
                               'পোস্ট সাবমিট করতে সমস্যা হয়েছে';
            
            dispatch(hasStatus({ 
                status: false, 
                sms: errorMessage 
            }));
            
            setTimeout(() => {
                dispatch(hasStatus(null)); 
            }, 2500);
        }
    };

    const handleClosePost = () => {
        setTitle("");
        setText("");
        setImage(null);
        setFeaturedImage(null);
        setCategory("Technology");
        setIsOpen(false);
    }

  return ( 
    <div style={{background: color.bgsecondary , height: isOpen ? "auto" : "auto"  }} className={`${className}   duration-300 ease-in-out   md:p-2 p-1 rounded-[5px] md:rounded-[10px] mt-5 `}>

        {postStatus && <Status status={postStatus.status} message={postStatus.sms} />}
        
        {/* poster information */}
        <div className="flex items-center gap-2 cursor-pointer ">
            {/* poster pic */}
            <img src={user?.photoURL} alt="poster" className=' w-9 h-9 rounded-full    ' />

            {/* poster name */}
            <h2 onClick={() => setIsOpen(true)} style={{color: color.textprimary}} className=" font-work-sans font-semibold lg:text-base md:text-sm text-xs flex items-center gap-2 flex-1  ">
                {!isOpen && <span className='hidden md:inline-block '>hey,</span>}
                <span className='hidden md:inline-block    '>{user?.name}</span>
                {!isOpen && <span className=' w-[70%] md:w-auto whitespace-nowrap text-ellipsis overflow-hidden '>Post about something...</span>}
            </h2>

            {/* post box close button */}
            {isOpen && <button onClick={closeFunction || handleClosePost} type='button' style={{color: color.textprimary}} className='  cursor-pointer  text-3xl  '  ><IoCloseOutline/></button>}
        </div>

        {/* post box text */}

        {/* title */}
        {isOpen && <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" style={{color: color.textprimary}} placeholder='Title' className=' w-full font-bold outline-0 mt-2 text-sm    ' />}


        {/* description */}
        {isOpen && <textarea  value={text} onChange={(e) => setText(e.target.value)} style={{color: color.textprimary}} placeholder='Description...' className=' w-full xl:h-[150px] lg:h-25 md:h-20 sm:h-16 h-12 resize-none outline-0 mt-2 text-sm    ' />}


        {/* image */}
        {isOpen && image &&  <img src={image} alt="image" className=' w-full resize-none outline-0 md:w-[400px] xl:h-[200px] lg:h-35 md:h-30 sm:h-27 h-25 object-cover     ' />}

        {/* add image and post */}
        {isOpen && <div className="flex justify-between mt-2">
             
             <div className="flex items-center lg:gap-5 md:gap-4 sm:gap-3 gap-2 ">

                {/* add image */}
                {isOpen && <div className='w-fit h-7.5 cursor-pointer relative'>
                    <button type="button" className='text-3xl  text-[#1DA1F2]   '><HiPhoto/></button>
                    <input onChange={(e) => setImageUrl(e.target.files[0])} type="file" className='  w-full h-full resize-none outline-0 absolute top-0 left-0 opacity-0    ' />
                </div>}

                {/* add category */}
                <PostCategory setCategory={setCategory} category={category}   />
             </div>

            {/* upload button */}
             {isEdit.status ?
            <button onClick={()=>editPost(isEdit.id , title , text , featuredImage , category , prevImage , dispatch )} style={{background:  (title || text) && featuredImage ? "#4B6BFB" : color.bgprimary , color: (title || text) && featuredImage ? color.switchtext : color.textprimary}} className=' md:py-2  px-5 rounded-[6px] cursor-pointer  text-white font-work-sans font-medium text-base  md:leading-6 flex items-center gap-2   '  type="button">
              <span>Update</span>
              {postingstatus && <TbLoaderQuarter className='text-xl animate-rotate  '/>}
            </button>
            :

            <button onClick={handlePostSubmit} style={{background:  (title || text) && featuredImage ? "#4B6BFB" : color.bgprimary , color: (title || text) && featuredImage ? color.switchtext : color.textprimary}} className=' md:py-2  px-5 rounded-[6px] cursor-pointer  text-white font-work-sans font-medium text-base  md:leading-6 flex items-center gap-2   '  type="button">
              <span>Post</span>
              {postingstatus && <TbLoaderQuarter className='text-xl animate-rotate  '/>}
            </button>}

        </div>}

    </div>
  )
}
