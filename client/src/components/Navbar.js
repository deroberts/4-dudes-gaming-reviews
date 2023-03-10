import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext } from 'grommet';
import { FormClose, Menu } from 'grommet-icons';
import Auth from '../utils/auth';

const AppNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  // need event to log out
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Grommet>
      <Box background="brand" pad="medium">
        <Button onClick={() => setShowSidebar(!showSidebar)}>
          <Menu color="light-1" />
        </Button>
        <Link to="Home">
          <Heading level="3" margin="none" color="light-1">
            4-dudes-gaming-reviews
          </Heading>
        </Link>
        {Auth.loggedIn() && (
          <Button onClick={logout}>
            Logout
          </Button>
        )}
      </Box>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === 'small' ? (
            <Layer>
              <Box background="brand" fill>
                <Button onClick={() => setShowSidebar(false)}>
                  <FormClose color="light-1" />
                </Button>
                <Link to="/">HOME</Link>
                <Link to="/signup">SIGNUP</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/me">Profile</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/explore">EXPLOOOOOREEEEEEE</Link>
                {Auth.loggedIn() && (
                  <Button onClick={logout}>Logout</Button>
                )}
              </Box>
            </Layer>
          ) : (
              <Collapsible direction="horizontal" open={showSidebar}>
                <Box background="brand" fill>
                <Link to="/">HOME</Link>
                <Link to="/signup">SIGNUP</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/me">Profile</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/explore">EXPLOOOOOREEEEEEE</Link>
              {Auth.loggedIn() && (
                <Button onClick={logout}>Logout</Button>
                  
                )}
                </Box>
              </Collapsible>
                
            )
        }


      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default AppNavbar;

