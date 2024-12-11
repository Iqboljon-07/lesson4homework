import React, { useState } from "react";
import { Button, Main1 } from "./style";
import Share from "../Share";
import Save from "../Save";

function Main() {
  //   let share = () => {
  //     alert("Click");
  //   };
  const [share, Setshare] = useState(false);

  const [save, Setsave] = useState(false);
  return (
    <div>
      <Main1>
        <Button>
          <i style={{ fontSize: "24px" }} class="fa-regular fa-thumbs-up"></i>
          <p style={{ fontSize: "24px" }}>37K</p>
          <i style={{ fontSize: "24px" }} class="fa-regular fa-thumbs-down"></i>
        </Button>

        <Button onClick={() => Setshare(true)}>
          <i style={{ fontSize: "24px" }} class="fa-solid fa-share"></i>
          <p style={{ fontSize: "24px" }}>share</p>
        </Button>

        {share && <Share Setshare1={Setshare} />}

        <Button>
          <i class="fa-solid fa-download"></i>
          <p style={{ fontSize: "24px" }}>download</p>
        </Button>
        <Button onClick={() => Setsave(true)}>
          <i class="fa-regular fa-floppy-disk"></i>
          <p style={{ fontSize: "24px" }}>save</p>
        </Button>
        {save && <Save props={Setsave} />}

        <Button style={{ width: "50px" }}>
          <i class="fa-solid fa-ellipsis"></i>
        </Button>
      </Main1>
    </div>
  );
}

export default Main;
