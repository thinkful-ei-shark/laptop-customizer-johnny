import React from "react";
import Header from "../Header";
import PartItems from "./PartItems";
import slugify from "slugify";

const Parts = (props) => {
  console.log(props);
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = props.features[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === props.state.selected[feature].name}
            onChange={(e) => props.updateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({props.currency.format(item.cost)})
          </label>
        </div>
      );
    });

    return <PartItems key={featureHash} feature={feature} options={options} />;
  });
  return (
    <form className="main__form">
      <Header header={props.header} />
      {/* {props.features} */}
      {features}
    </form>
  );
};

export default Parts;
