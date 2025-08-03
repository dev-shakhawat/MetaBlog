import React, { useEffect, useState } from "react";
import Container from "../../common/Container";
import Banner from "./profileKit/Banner";
import PostBox from "./profileKit/PostBox";
import PostedItem from "./profileKit/PostedItem";
import { useSelector } from "react-redux";
import colorSchema from "../../../colors/colorSchema";
import NoPost from "../../common/NoPost";

export default function Profile() {
  const color = colorSchema();
  const [allPosts, setAllPosts] = useState([]);
  const postload = useSelector((state) => state.user.postsloaded);

  useEffect(() => {
    fetch("http://localhost:3000/post/getPostbyUser", {
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

  console.log(allPosts);

  return (
    <div className="    ">
      <Container>
        {/* banner */}
        <Banner />

        {/* post box */}
        <PostBox />

        {/* posted items */}
        <h2
          style={{ color: color.textprimary }}
          className="mt-5 font-work-sans font-bold text-2xl "
        >
          Your Posts
        </h2>
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
