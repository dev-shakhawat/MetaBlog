import { loadpost } from "../redux/slices/postSlice";

async function DeletePost(postIDs , dispatch){
    
    await fetch(`http://localhost:3000/post/deletePost`, {
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
    .catch(error => console.error(error));
}

export default DeletePost