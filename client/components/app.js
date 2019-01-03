import React from "react";
import Title from "./title.js";
import Seller from "./seller.js";
import Shipping from "./shipping.js";
import Rating from "./rating.js";
import Price from "./price.js";
import Desc from "./description.js";
import Color from "./color.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div> This is the big box that holds your app </div>
      </div>
    );
  }
}

export default App;
