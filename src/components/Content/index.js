import React from 'react';
import { Box, Text, ListItem, List, Button, Image } from '@chakra-ui/core';

const Content = () => {
  return (
    <Box
      display={{ md: 'flex' }}
      justifyContent="center"
      alignItems="center"
      px={4}
      pt={4}
      style={{ height: 'calc(100vh - 90px)' }}
    >
      <Box flexShrink="0">
        <Image
          rounded="lg"
          width={{ md: 400 }}
          src="https://avatars0.githubusercontent.com/u/9688329?s=460&u=30a3fb87fbe2cbdd1e5639205e730098f1e066fc&v=4"
          alt="Rakesh Cheekatimala"
        />
      </Box>

      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight="bold"
          fontFamily="Playball,cursive"
          fontSize="40px"
          letterSpacing="wide"
          mt={3}
        >
          RAKESH CHEEKATIMALA
        </Text>
        <Text mt={2}>
          I'm Software engineer based in Singapore, specializing in building,
          and solutiong frontend web applications and everything in between.
        </Text>
        <List spacing={4} mt={4}>
          <ListItem>
            <span role="img" aria-label="worklocation">
              🔭
            </span>{' '}
            I’m currently working at Singtel as Software Engineer, I love
            learning new things,excited to solve problems.
          </ListItem>
          <ListItem>
            <span role="img" aria-label="learning">
              🌱
            </span>{' '}
            I’m currently learning AWS & preparing for AWSCertified Solutions
            Architect - Associate Level.
          </ListItem>

          <ListItem>
            <span role="img" aria-label="askme">
              💬
            </span>{' '}
            Ask me about React,CSS,Javascript,Frontend topics would be
            interested to help you or discuss.
          </ListItem>
          <ListItem>
            <span role="img" aria-label="funfact">
              ⚡
            </span>{' '}
            Fun fact: I love music,travelling & cooking. Huge fan of Dark
            (Netflix series).
          </ListItem>
          <ListItem>
            <span role="img" aria-label="reachme@">
              📫
            </span>{' '}
            How to reach me : rakeshcheekatimala@gmail.com
          </ListItem>
        </List>
        <br />
        <Button
          as="a"
          rightIcon="arrow-forward"
          variant="outline"
          size="lg"
          border="1px"
          height="60px"
          href="mailto:rakeshcheekatimala@gmail.com"
        >
          Get In Touch
        </Button>
      </Box>
    </Box>
  );
};

export default Content;
