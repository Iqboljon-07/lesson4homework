import React, { useState } from "react";
import {
  Button,
  Input,
  Navbar1,
  Navbar2,
  Navbar3,
  Navbar4,
  Navbar5,
} from "./style";
import Email from "../Email";
import Sidebar from "../Sidebar";

function Navbar() {
  const [email, Setemail] = useState(false);
  const [sidebar, Setsidebar] = useState(false);

  return (
    <>
      <Navbar1>
        <Navbar5>
          <Navbar2>
            <i
              onClick={() => Setsidebar(!sidebar)}
              style={{ fontSize: "24px" }}
              class="fa-solid fa-bars"
            ></i>
            <div className={`sidebar ${sidebar ? "show" : ""}`}></div>
            {sidebar && <Sidebar props={Setsidebar} />}

            <i
              class="fa fa-youtube-play"
              style={{ fontSize: "24px", color: "red" }}
            >
              <span style={{ fontSize: "18px", color: "white" }}> YouTube</span>
            </i>
          </Navbar2>
          <Navbar3>
            <Input placeholder="search" />
            <i style={{ fontSize: "24px" }} class="fa-solid fa-microphone"></i>
          </Navbar3>
          <Navbar4>
            <i style={{ fontSize: "24px" }} class="fa-solid fa-cart-plus"></i>
            <i style={{ fontSize: "24px" }} class="fa-regular fa-bell"></i>
            <Button onClick={() => Setemail(!email)}>I</Button>
            {email && <Email props={Setemail} />}
          </Navbar4>
        </Navbar5>
      </Navbar1>
    </>
  );
}

export default Navbar;
