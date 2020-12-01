import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import GroupIcon from "@material-ui/icons/Group";

export default function QuickButton(props) {
  if (props.direction === "upload") {
    return (
      <Button
        color={props.color}
        onClick={props.onClick}
        isActive={props.isActive}
      >
        <AddIcon />
      </Button>
    );
  } else if (props.direction === "lfg") {
    return (
      <Button
        color={props.color}
        onClick={props.onClick}
        isActive={props.isActive}
      >
        <SportsEsportsIcon />
      </Button>
    );
  } else {
    return (
      <Button
        color={props.color}
        onClick={props.onClick}
        isActive={props.isActive}
      >
        <GroupIcon />
      </Button>
    );
  }
}

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin: 5px;
  border-radius: 50%;
  box-shadow: ${(props) =>
    props.isActive
      ? "inset 4px 4px 5px var(--secondary-gray), inset -4px -4px 6px var(--shadow-gray)"
      : "inset 0 0 4px black"};

  svg {
    height: 35px;
    width: 35px;
    color: ${(props) =>
      props.isActive ? props.color : "var(--inactivebutton-gray)"};
  }
`;
