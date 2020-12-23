import React, { useState } from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";
import Button from "./Button";
import Switch from "@material-ui/core/Switch";

export default function Navigation() {
  const [dropdown, setDropdown] = useState(false);

  //toogle dropdown
  const showDropdown = () => setDropdown(!dropdown);

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <BurgerButton isVisible={dropdown} onClick={showDropdown} />
      {dropdown && (
        <StyledNavigation>
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <Button text="Settings" color></Button>
          <Button text="Logout" color></Button>
        </StyledNavigation>
      )}
    </div>
  );
}

const StyledNavigation = styled.nav`
  background-color: darkgray;
  display: flex;
  justify-content: center;
  height: 6vh;
  width: 100vw;
  position: absolute;
  top: 60px;
  right: 0;
`;
