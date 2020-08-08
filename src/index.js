import React from "react";
import ReactDOM from "react-dom";
import Template from "./template";
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Template
      contact="Beyonce"
      imgsource="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 789"
      emai="b@beyonce.com"
    />

    <Template
      contact="Jack Bauer"
      imgsource="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      phone="+987 654 321"
      emai="jack@nowhere.com"
    />

    <Template
      contact="Chuck Norris"
      imgsource="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      phone="+918 372 574"
      emai="gmail@chucknorris.com"
    />
  </div>,
  document.getElementById("root")
);
