import React from "react";

class Desc extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Desc">
        <div>Item Description: {this.props.detail} </div>
      </div>
    );
  }
}
export default Desc;
