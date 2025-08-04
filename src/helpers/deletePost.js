async function DeletePost(postIDs){
    
    await fetch(`http://localhost:3000/post/deletePost`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         postIDs: postIDs
      }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}