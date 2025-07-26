import React from "react";
import colorSchema from "../../../colors/colorSchema";
import Container from "../../common/Container";

export default function ContactHead() {
  const color = colorSchema();

  return (
    <Container>
      <div>

        <h2
          style={{ color: color.textprimary }}
          className=" font-work-sans font-bold text-4xl text-center mt-10   "
        >
          Contact Us
        </h2>

        <p style={{ color: color.textsecondary }} className=" font-inter font-normal text-base text-center mt-4 w-1/2 mx-auto   ">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
      </div>
    </Container>
  );
}
