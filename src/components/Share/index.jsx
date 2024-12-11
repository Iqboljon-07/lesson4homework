import React from "react";
import "./style.css";
function Share({ Setshare1 }) {
  return (
    <div className="share">
      <div className="share1">
        <p>поделиться на вкладке "Сообщество " </p>
        <button onClick={() => Setshare1(false)}>
          <i
            style={{ fontSize: "24px", color: "red" }}
            class="fa-solid fa-x"
          ></i>
        </button>
      </div>
      <button className="btn2">новай запись </button>
      <div className="share2">
        <p>поделиться </p>
        <div className="share3">
          <i class="fa-solid fa-code"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-tiktok"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-whatsapp"></i>
        </div>
      </div>
      <div className="input">
        <a href="https://youtu.be/9TckOLmtHyU">https://youtu.be/9TckOLmtHyU</a>
      </div>
    </div>
  );
}

export default Share;
