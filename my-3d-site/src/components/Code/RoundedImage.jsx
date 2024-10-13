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
        alt={eventName}
        border={border}
        bordercolor={bordercolor}
        borderStyle={borderstyle}
        height={height}
        left="0"
        object-fit="cover"
        position="absolute"
        src={image}
        top="0"
        width={width}
      />
    );
  }
}
