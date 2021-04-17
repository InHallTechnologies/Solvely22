import React, { useState } from "react";
import "./our-work.styles.scss";
import { WORK_DETAILS } from "./work-details";

import Work from "../work/work.component";
import { Snackbar } from "@material-ui/core";



const OurWork = (props) => {

  const [snackbar, setSnackbar] = useState(false)
  const [message, setMessage] = useState("")
  const handleClick = (event) => {

    if (event.target.id === "My Rent Space") {
      window.open("https://www.myrent.space/", "_blank");
    } else if (event.target.id === "Home Umbrella") {
        setMessage("Coming Soon")
        setSnackbar(true)
    } else if (event.target.id === "R2RS") {
        setMessage("Under Development")
        setSnackbar(true)
    }
  };
  return (
    <div className="our-work" ref={props.theref}>
      <h1 className="section-title">
        <span className="brown">Our</span> <span className="blue">Work</span>
      </h1>
      <div className="work-directory">
        {WORK_DETAILS.map((item, index) => (
          <Work
            key={index}
            icon={item.icon}
            discription={item.discription}
            name={item.name}
            handleClick={handleClick}
          />
        ))}
      </div>

      <Snackbar open={snackbar} onClose={() => {setSnackbar(false)}} autoHideDuration={1000} message={message} />
    </div>
  );
};

export default OurWork;
