import React from "react";
import { Aside1, Aside2 } from "./style";
import Main from "../Main";
import Right from "../Right";

function Aside() {
  return (
    <>
      <Aside2>
        <Aside1>
          <iframe
            style={{ borderRadius: "20px", marginTop: "100px" }}
            width="1100"
            height="500"
            src="https://www.youtube.com/embed/9TckOLmtHyU"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
          <Main />
        </Aside1>
        <Right />
      </Aside2>
    </>
  );
}

export default Aside;
