import React from "react";

const PartItemSelection = (props) => {
  return (
    <div>
      <input
        type="radio"
        id={props.id}
        className={props.className}
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label htmlFor={props.id} className="feature__label">
        {props.itemName} {props.currencyProp}
      </label>
    </div>
  );
};

export default PartItemSelection;
