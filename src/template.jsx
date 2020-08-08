import React from "react";

function template(props) {
  return (
    <div className="myclass">
      <h2>{props.contact}</h2>
      <img src={props.imgsource} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.emai}</p>
    </div>
  );
}
export default template;
