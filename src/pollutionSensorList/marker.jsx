import React, { Component } from "react";
import marker from "../assets/images/marker.png";
class Marker extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={marker}
          alt="Marker"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
    );
  }
}
export default Marker;
