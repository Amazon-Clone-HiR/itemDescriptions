import React from "react";

class Seller extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Seller">
        <div>Seller Name: {this.props.detail} </div>
      </div>
    );
  }
}
export default Seller;
