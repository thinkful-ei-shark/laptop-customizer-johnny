import React from "react";
import Header from "../Header";
import PartItems from "./PartItems";
import PartItemSelection from "./PartItemSelection";
import slugify from "slugify";

const Parts = (props) => {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = props.features[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <PartItemSelection
            inputType="radio"
            classNames="feature_option"
            id={itemHash}
            name={slugify(feature)}
            checked={item.name === props.state.selected[feature].name}
            onChange={(e) => props.updateFeature(feature, item)}
            labelClassName="feature_label"
            currencyProp={props.currency.format(item.cost)}
            itemName={item.name}
          />
        </div>
      );
    });

    return <PartItems key={featureHash} feature={feature} options={options} />;
  });
  return (
    <form className="main__form">
      <Header header={props.header} />
      {features}
    </form>
  );
};

export default Parts;
