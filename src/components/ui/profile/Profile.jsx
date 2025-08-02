import React from "react";
import Container from "../../common/Container";
import Banner from "./profileKit/Banner";
import PostBox from "./profileKit/PostBox";

export default function Profile() {
  return (
    <div className="    ">
        <Container>
        
           {/* banner */}
           <Banner/>

           {/* post box */}
           <PostBox/>

        </Container>
    </div>
  );
}
