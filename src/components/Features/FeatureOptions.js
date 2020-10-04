import React from "react";
import slugify from "slugify";
import Option from "./Option";

export default function FeatureOptions(props) {
  // FeatureOptions component parses given featureName's options.
  console.log(props);
  const options = props.options.map((option) => {
    const itemHash = slugify(JSON.stringify(option));
    // console.log("this is options", options);
    return (
      <Option
        key={itemHash}
        onChange={(e) => props.updateFeature(props.featureName, option)}
        id={itemHash}
        name={slugify(props.featureName)}
        // HTML Attributes
        feature={props.featureName}
        checked={option.name === props.feature.selected[props.featureName].name}
        // Option component props

        currencyProp={props.currency.format(option.cost)}
        itemName={option.name}
        data={option} // Telling pure component to parse its own data.
      />
    );
  });
  return options;
}
