import React from "react";

class Shipping extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Shipping">
        <div> Shipping: {this.props.detail}</div>
      </div>
    );
  }
}
export default Shipping;
