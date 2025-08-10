import React, { useEffect, useState } from "react";
import Container from "../../common/Container";
import Banner from "./profileKit/Banner";
import PostBox from "./profileKit/PostBox";
import PostedItem from "./profileKit/PostedItem";
import { useDispatch, useSelector } from "react-redux";
import colorSchema from "../../../colors/colorSchema";
import NoPost from "../../common/NoPost";

// redux 
import { addtoSelectedItems } from "../../../redux/slices/postSlice";
import PostHeader from "./profileKit/PostHeader";

export default function Profile() {
  const color = colorSchema();
  const [allPosts, setAllPosts] = useState([]);
  const postload = useSelector((state) => state.post.postsloaded);
  const selectedAll = useSelector((state) => state.post.selectall);
  const isEdit = useSelector((state) => state.post.isEdit);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/post/getPostbyUser`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setAllPosts(data.posts))
      .catch((error) => console.log(error));
  }, [postload]);

  useEffect(() => {
    if (selectedAll) {
      const updatedSelectedItems = allPosts.map((item) => item._id);  
      dispatch(addtoSelectedItems(updatedSelectedItems));
    }
    
  }, [selectedAll]);

  return (
    <div className=" px-2   ">
      <Container>
        {/* banner */}
        <Banner />

        {/* post box */}
        <PostBox/>
        {isEdit.status && <PostBox className="fixed top-1/2 left-1/2 -translate-1/2 w-3/4  " open={true} closeFunction={()=> dispatch({type: 'post/editStatus' , payload: {status: false , id: null}})}  />}

        {/* posted items */}
        <PostHeader isSelection={allPosts.length > 0 ? true : false} />

        {allPosts.length > 0 ? (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-3    ">
            {allPosts.map((item, index) => (
              <PostedItem  key={index} data={item} />
            ))}
          </div>
        ) : (
          <NoPost sms={"You don't have any post yet"} />
        )}
      </Container>
    </div>
  );
}
