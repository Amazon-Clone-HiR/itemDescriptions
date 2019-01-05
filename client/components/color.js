import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="Color">
        <div>Color Choices: </div>
        {this.props.detail.map((color, dex) => (
          <div>
            {dex + 1} {") "}
            {color}
          </div>
        ))}
      </div>
    );
  }
}

export default Color;
