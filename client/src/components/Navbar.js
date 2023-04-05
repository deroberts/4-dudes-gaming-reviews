import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  ResponsiveContext
} from "grommet";
import { Menu } from "grommet-icons";
import Auth from "../utils/auth";

const AppNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const authSwitch = (authState) => {
    if (!authState) {
      return (
        <>
          <Link to="/signup">SIGNUP</Link>
          <Link to="/login">LOGIN</Link>
        </>
      );
    } else {
      return (
        <>
          <Link>
            <Button onClick={logout}>LOGOUT</Button>
          </Link>
        </>
      );
    }
  };

  return (
    <Grommet>
      <Box
        background="brand"
        pad="medium"
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "space-between",
          padding: "6rem auto"
        }}
      >
        <Link to="Home">
          <Heading level="2" margin="none" color="light-1">
            4Dudes <br /> Gaming Reviews
          </Heading>
        </Link>
        <Button
          onClick={() => setShowSidebar(!showSidebar)}
          className="menu-toggle-btn"
        >
          <Menu color="light-1" />
        </Button>
      </Box>
      <ResponsiveContext.Consumer>
        {(_) => (
          <Collapsible
            direction="horizontal"
            open={showSidebar}
            className="collapse-box"
          >
            <Box background="brand" fill className="navlink-container">
              <Link to="/">HOME</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/explore">EXPLORE!</Link>
              {authSwitch(Auth.loggedIn())}
            </Box>
          </Collapsible>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default AppNavbar;
