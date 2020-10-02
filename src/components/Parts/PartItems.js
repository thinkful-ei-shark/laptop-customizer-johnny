import React from "react";

const PartItems = (props) => {
  return (
    <fieldset className="feature">
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {props.options}
    </fieldset>
  );
};

export default PartItems;
