import React from 'react';
import { Text } from '@chakra-ui/core';
export const H1 = (props) => {
    return (<Text
        as="H1"
        fontWeight="300"
        fontFamily="Playball,cursive"
        fontSize="2rem"
        letterSpacing="wide"
        textAlign={props.align || 'center'}
        mt={3}
    >
        {props.title}
    </Text>)
}

export const H2 = (props) => {
    return (<Text
        as="H2"
        fontWeight="300"
        fontFamily="Playball,cursive"
        fontSize="1.5rem"
        letterSpacing="wide"
        textAlign={props.align || 'center'}
        mt={3}
    >
        {props.title}
    </Text>)
}