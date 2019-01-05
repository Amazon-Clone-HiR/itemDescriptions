import React from "react";

class Rating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Rating">
        <div>Item Rating: {this.props.detail} out of 5 stars!</div>
      </div>
    );
  }
}
export default Rating;
