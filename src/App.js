import React, { useState } from "react";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

import Header from "./components/Header";
import Parts from "./components/Parts/Parts";

import "./App.css";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function App(props) {
  console.log(props);
  const [state, setState] = useState({
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200,
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  });
  const updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, state.selected);
    selected[feature] = newValue;
    console.log(selected);
    setState({ selected });
  };

  const summary = Object.keys(state.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = state.selected[feature];
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });

  const total = Object.keys(state.selected).reduce(
    (acc, curr) => acc + state.selected[curr].cost,
    0
  );

  return (
    <div className="App">
      <header>
        <h1>ELF Computing | Laptops</h1>
      </header>
      <main>
        <Parts
          features={props.features}
          header="Customize your Laptop"
          updateFeature={() => updateFeature()}
          currency={USCurrencyFormat}
          state={state}
        />
        <section className="main__summary">
          <Header header="Your cart" />
          {summary}
          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {USCurrencyFormat.format(total)}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
