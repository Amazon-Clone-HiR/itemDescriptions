import React from "react";
import Title from "./title.js";
import Seller from "./seller.js";
import Shipping from "./shipping.js";
import Rating from "./rating.js";
import Price from "./price.js";
import Desc from "./description.js";
import Color from "./color.js";
import sampleData from "../../sampleData.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: sampleData[0]
    };
  }
  componentDidMount() {
    console.log("mounted", sampleData[0]);
  }

  render() {
    return (
      <div className="App">
        <Title detail={this.state.item.title} />
        <Seller detail={this.state.item.seller} />
        <Shipping detail={this.state.item.shipping} />
        <Rating detail={this.state.item.rating} />
        <Price detail={this.state.item.price} />
        <Desc detail={this.state.item.description} />
        <Color detail={this.state.item.colors} />
      </div>
    );
  }
}

export default App;
