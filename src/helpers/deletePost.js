import { loadpost } from "../redux/slices/postSlice";

async function DeletePost(postIDs , dispatch){
    
    await fetch(`${import.meta.env.VITE_BASE_URL}/post/deletePost`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         postIDs
      }),
    })
    .then(response => response.json())
    .then(data =>  dispatch(loadpost()))
    .catch(error => console.log(error));
}

export default DeletePost