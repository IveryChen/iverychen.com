import React from "react";

import Box from "../Box";

export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ isClicked: !prevState.isClicked }));

    console.log("clicked");
    console.log("isClicked", this.state.isClicked);
  };

  render() {
    const { url } = this.props;
    const { isClicked } = this.state;

    const boxStyle = isClicked ? { gridColumn: "1/3", gridRow: "1/3" } : {};

    return (
      <Box display="grid" style={boxStyle}>
        <video
          autoPlay
          loop
          muted
          onClick={this.handleClick}
          src={`https://d2skwsfewsc9s1.cloudfront.net/Videos/${url}.mp4`}
          type="video/mp4"
          width="100%"
          height="100%"
        />
      </Box>
    );
  }
}
