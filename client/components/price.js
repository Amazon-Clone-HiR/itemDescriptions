import React from "react";

class Price extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Price">
        <div> Price: {this.props.detail}</div>
      </div>
    );
  }
}
export default Price;
