import React from "react";
import "./style.css";
function Save({ props }) {
  return (
    <div className="save">
      <div className="save1">
        <p>выбирать плайлист </p>
        <button onClick={() => props(false)}>
          <i style={{ fontSize: "24px" }} class="fa-solid fa-x"></i>
        </button>
      </div>
      <button className="btn3">новый </button>
    </div>
  );
}

export default Save;
