import React from "react";

const PartItemSelection = (props) => {
  // inputType="radio"
  //           classNames="feature_option"
  //           id={itemHash}
  //           name={slugify(feature)}
  //           checked={item.name === props.state.selected[feature].name}
  //           onChange={(e) => props.updateFeature(feature, item)}
  //           labelClassName="feature_label"
  //           currenctyProp={props.currency.format(item.cost)}
  //           itemName={item.name}
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
