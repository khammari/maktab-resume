import React, {Component} from "react";

const DownIcon = (props) => {
    return (
        <div
        onClick={props.onClick}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "-34px",
          transform: "translateY(-45px)"
        }}
      >
        <div
          style={{
            width: "30px"
          }}
        >
          <img alt={props.icon} src={props.icon} style={{
            width: "30px"
          }}/>
        </div>
      </div>
    )
}

export default DownIcon;