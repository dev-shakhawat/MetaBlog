import React from "react";
import colorSchema from "../../colors/colorSchema";

export default function NoPost({sms}) {
  const color = colorSchema();

  return (
    <div className="w-1/2 mx-auto mt-20 grid place-items-center  ">
      <div>
        <h2
          style={{ color: color.textprimary }}
          className="font-work-sans font-bold text-4xl text-center mt-10    "
        >
          Offs , sorry!
        </h2>
        <p
          style={{ color: color.textsecondary }}
          className="font-work-sans font-medium text-lg text-center      "
        >
          {sms}
        </p>
      </div>
    </div>
  );
}
