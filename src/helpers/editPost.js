import axios from "axios";
import { loadpost } from "../redux/slices/postSlice";
import { editStatus } from "../redux/slices/postSlice";
import { hasStatus } from "../redux/slices/notificationSlice";


// editPost ফাংশনে এরর হ্যান্ডলিং যোগ করুন
async function editPost(postID, title, description, featuredImage, category, prevImage, setUpdateStatus, dispatch) {
  setUpdateStatus(true);
  const formData = new FormData();
  formData.append('postID', postID);
  formData.append('title', title);
  formData.append('description', description);
  if(featuredImage) formData.append('featuredImage', featuredImage);
  formData.append('category', category);
  formData.append('prevImage', prevImage);

  try {
      const response = await axios.patch(
          `${import.meta.env.VITE_BASE_URL}/post/updatePost`, 
          formData, 
          { 
              withCredentials: true,
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          }
      );
      
      const data = response.data;
      setUpdateStatus(false);
      dispatch(hasStatus(data));
      dispatch(editStatus({status: false, id: null}));
      dispatch(loadpost());
      
      setTimeout(() => dispatch(hasStatus(null)), 2000);
      
  } catch(error) {
      setUpdateStatus(false);
      let errorMessage = error.response?.data?.sms || error.message;
      
      dispatch(hasStatus({
          status: false, 
          sms: errorMessage
      }));
      
      setTimeout(() => dispatch(hasStatus(null)), 2000);
  }
}


export default editPost