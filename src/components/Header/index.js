import React from 'react';
import { Box, Flex, Text, useColorMode, Icon, Avatar } from '@chakra-ui/core';

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        {...props}
      >
        <Flex align="center" mr={5}>
          <Avatar src="https://avatars0.githubusercontent.com/u/9688329?s=400&u=30a3fb87fbe2cbdd1e5639205e730098f1e066fc&v=4" />
        </Flex>

        <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
          <svg
            fill={colorMode === 'light' ? '#000' : 'Aquamarine'}
            width="15px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'flex' }}
          width={{ sm: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          <MenuItems>About</MenuItems>
          <MenuItems>Projects</MenuItems>
        </Box>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'block' }}
          mt={{ base: 4, md: 0 }}
          style={{ cursor: 'pointer' }}
        >
          {colorMode === 'light' ? (
            <Icon name="moon" onClick={toggleColorMode} />
          ) : (
            <Icon name="sun" onClick={toggleColorMode} />
          )}
        </Box>
      </Flex>
      <hr />
    </>
  );
};

export default Header;
