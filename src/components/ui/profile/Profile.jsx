import React, { useEffect } from "react";
import Container from "../../common/Container";
import Banner from "./profileKit/Banner";
import PostBox from "./profileKit/PostBox";
import PostedItem from "./profileKit/PostedItem";

export default function Profile() {

  useEffect(() => {
    
  }, [])
  return (
    <div className="    ">
        <Container>
        
           {/* banner */}
           <Banner/>

           {/* post box */}
           <PostBox/>

           {/* posted items */}
           <div className="mt-5">
            <PostedItem/>
           </div>

        </Container>
    </div>
  );
}
