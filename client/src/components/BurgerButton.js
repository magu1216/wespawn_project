import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";

export default function BurgerButton(props) {
  return (
    <ButtonWrapper>
      {props.isVisible ? (
        <CloseIcon style={{ fontSize: 50 }} onClick={props.onClick} />
      ) : (
        <MenuIcon style={{ fontSize: 50 }} onClick={props.onClick} />
      )}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  margin-right: 12px;
`;
