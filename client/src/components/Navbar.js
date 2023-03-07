import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext } from 'grommet';
import { FormClose, Menu } from 'grommet-icons';

const AppNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

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
      </Box>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === 'small' ? (
            <Layer>
              <Box background="brand" fill>
                <Button onClick={() => setShowSidebar(false)}>
                  <FormClose color="light-1" />
                </Button>
                <Link to="Home">HOME</Link>
                <Link to="Signup">SIGNUP</Link>
                <Link to="About">ABOUT</Link>
                <Link to="Explore">EXPLOOOOOREEEEEEE</Link>
              </Box>
            </Layer>
          ) : (
            <Collapsible direction="horizontal" open={showSidebar}>
              <Box background="brand" fill>
                <Link to="Home">HOME</Link>
                <Link to="Signup">SIGNUP</Link>
                <Link to="About">ABOUT</Link>
                <Link to="Explore">EXPLOOOOOREEEEEEE</Link>
              </Box>
            </Collapsible>
          )
        }
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default AppNavbar;
