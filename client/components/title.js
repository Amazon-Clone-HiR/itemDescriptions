import React from "react";

class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="Title">
        <div> TITLE: {this.props.detail}</div>
      </div>
    );
  }
}
export default Title;
