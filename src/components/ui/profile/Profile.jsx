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
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/post/getPostbyUser`, {
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
    <div className="    ">
      <Container>
        {/* banner */}
        <Banner />

        {/* post box */}
        <PostBox />

        {/* posted items */}
        <PostHeader/>

        {allPosts.length > 0 ? (
          <div className="grid grid-cols-3 gap-3 mt-3    ">
            {allPosts.map((item, index) => (
              <PostedItem key={index} data={item} />
            ))}
          </div>
        ) : (
          <NoPost sms={"You don't have any post yet"} />
        )}
      </Container>
    </div>
  );
}
