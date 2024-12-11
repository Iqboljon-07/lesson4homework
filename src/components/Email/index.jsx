import React from "react";
import "./style.css";
import { Button } from "../Navbar/style";
import { Container2, H2 } from "./style";
function Email(props) {
  return (
    <div className="email">
      <div className="container1">
        <Button style={{ backgroundColor: "green" }}>I</Button>
        <h2>Iqboljon Orifjonov</h2>
      </div>
      <Container2>
        <i style={{ fontSize: "24px" }} class="fa-brands fa-google"></i>

        <H2>Aккaунт гоогле</H2>
      </Container2>

      <Container2>
        <i style={{ fontSize: "24px" }} class="fa-regular fa-user"></i>

        <H2>сменить аккоунт</H2>
      </Container2>

      <Container2>
        <i
          style={{ fontSize: "24px" }}
          class="fa-solid fa-arrow-right-from-bracket"
        ></i>

        <H2>выйти </H2>
      </Container2>

      <Container2>
        <i
          style={{ fontSize: "24px" }}
          class="fa-brands fa-creative-commons-share"
        ></i>

        <H2>творчская студия YouTube</H2>
      </Container2>

      <Container2>
        <i
          style={{ fontSize: "24px" }}
          class="fa-solid fa-file-invoice-dollar"
        ></i>

        <H2>покупки и платные подписки </H2>
      </Container2>

      <Container2>
        <i
          style={{ fontSize: "24px" }}
          class="fa-solid fa-file-invoice-dollar"
        ></i>

        <H2>покупки и платные подписки </H2>
      </Container2>
      <hr style={{ color: "yellow" }} />

      <Container2>
        <i style={{ fontSize: "24px" }} class="fa-solid fa-shield-halved"></i>

        <H2>ваши данные YouTube</H2>
      </Container2>

      <Container2>
        <i style={{ fontSize: "24px" }} class="fa-solid fa-moon"></i>

        <H2>Тема:как на устройства </H2>
      </Container2>

      <Container2>
        <i style={{ fontSize: "24px" }} class="fa-solid fa-language"></i>

        <H2>Язык:Русский </H2>
      </Container2>

      <Container2>
        <i style={{ fontSize: "24px" }} class="fa-solid fa-globe"></i>
        <H2>Страна:Uzb </H2>
      </Container2>
    </div>
  );
}

export default Email;
