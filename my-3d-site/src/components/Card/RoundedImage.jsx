import React from "react";

export default class RoundedImage extends React.PureComponent {
  render() {
    const {
      image,
      eventName,
      width,
      height,
      border,
      borderstyle,
      bordercolor,
    } = this.props;

    return (
      <img
        src={image}
        alt={eventName}
        width={width}
        height={height}
        border={border}
        borderStyle={borderstyle}
        bordercolor={bordercolor}
      />
    );
  }
}
