import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import GroupIcon from "@material-ui/icons/Group";

export default function QuickButton(props) {
  //   let icon = { symbol };

  if (props.direction === "upload") {
    return (
      <Button>
        <AddIcon />
      </Button>
    );
  } else if (props.direction === "lfg") {
    return (
      <Button>
        <GroupIcon />
      </Button>
    );
  } else {
    return (
      <Button>
        <SportsEsportsIcon />
      </Button>
    );
  }
}

const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
