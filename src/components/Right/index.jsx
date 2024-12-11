import React from "react";
import { Right1 } from "./style";
import rasm1 from "../../assets/rasm1.png";
import rasm2 from "../../assets/rasm2.png";
import rasm3 from "../../assets/rasm3.png";
import rasm4 from "../../assets/rasm4.png";
import rasm5 from "../../assets/rasm5.png";
function Right() {
  return (
    <>
      <Right1>
        <img style={{ width: "310px", height: "120px" }} src={rasm1} alt="" />
        <img style={{ width: "310px", height: "120px" }} src={rasm2} alt="" />
        <img style={{ width: "310px", height: "120px" }} src={rasm3} alt="" />
        <img style={{ width: "310px", height: "120px" }} src={rasm4} alt="" />
      </Right1>
    </>
  );
}

export default Right;
