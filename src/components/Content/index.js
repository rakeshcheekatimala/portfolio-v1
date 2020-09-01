import React from 'react';
import { Box, Text, Stack, ListItem, List } from '@chakra-ui/core';

const Content = () => {
  return (
    <Stack align="center" justify="center" p={8}>
      <Box>
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
          I'm Software engineer based in Singapore, specaializing in building,
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
      </Box>
    </Stack>
  );
};

export default Content;
