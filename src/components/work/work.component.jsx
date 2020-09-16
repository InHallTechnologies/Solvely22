import React from "react";

import "./work.styles.scss";

const Work = ({ name, discription, icon, handleClick }) => {
  return (
    <div className="work" onClick={handleClick} id={name}>
      <img className="work-icon" src={icon} alt={`${name}-icon`} id={name} />
      <span className="work-description" id={name}>
        {discription}
      </span>
    </div>
  );
};

export default Work;
