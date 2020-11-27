import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export default function BurgerButton(props) {
  return (
    <>
      {props.isVisible ? (
        <CloseIcon style={{ fontSize: 50 }} onClick={props.onClick} />
      ) : (
        <MenuIcon style={{ fontSize: 50 }} onClick={props.onClick} />
      )}
    </>
  );
}
