import React from "react";

import Header from "../Header";

import FeatureOptions from "./FeatureOptions";

/*

 * Features contatiner component parses given features to pass to  component.

 * A container component contains other containers and pure components that eventually display HTML.

 */

const Features = (props) => {
  // Loop through features
  console.log("this is feature props", props);
  const features = Object.keys(props.features).map((featureName, idx) => {
    const featureHash = featureName + "-" + idx;

    return (
      <FeatureOptions
        key={featureHash}
        featureName={featureName}
        options={props.features[featureName]}
        currency={props.currency}
        updateFeature={(featureName, newValue) =>
          props.updateFeature(featureName, newValue)
        }
        feature={props.state}
      />
    );
  });

  return (
    <form className="main__form">
      <Header header={props.header} />

      {features}
    </form>
  );
};

export default Features;
