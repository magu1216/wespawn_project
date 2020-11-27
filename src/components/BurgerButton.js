import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export default function BurgerButton(props) {
  return (
    <div>
      {props.isVisible ? (
        <CloseIcon style={{ fontSize: 50 }} onClick={props.onClick} />
      ) : (
        <MenuIcon style={{ fontSize: 50 }} onClick={props.onClick} />
      )}
    </div>
  );
}
