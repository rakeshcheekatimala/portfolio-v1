import React from 'react';
import { Box, Divider, SimpleGrid, Text, List, ListItem, ListIcon } from '@chakra-ui/core';
import { H1, H2 } from './../Heading';

const About = () => {
    return (
        <Box margin="auto" p="4">
            <Box>
                <Divider />
                <H1 title="About Me" />
                <Divider />
            </Box>
            <SimpleGrid columns={[1, 1, 2]} spacing={10} mt={8} alignItems="center">
                <Box gridColumn>
                    <Text>
                        Hello!. I'm Rakesh who is a mid level Software Engineer with 7+ years of experience who believes in building applications by applying design thinking principles by practicising  agile methodologies

                        <br />
                        <br />
                        I like to build applications by applying good design principles. I am continous learner, recently i have started <i>#100DaysOfCode</i> for learning flutter.
                        <br />
                        <br />
                        I have completed my PostGraduate Diploma in Software Development  with GPA of 3.7/4.
                        <br />
                        <br />

                    </Text>
                </Box>
                <Box gridColumn borderWidth="1.5px" rounded="lg" overflow="hidden" p={4} d="flex" justifyContent="center" flexDirection="column">
                    <H2 title="Technical Skills" align="center"></H2>

                    <List spacing={1} mt={2}>
                        <ListItem>
                            <ListIcon icon="chevron-right" color="green.500" />
                                HTML & (S)CSS
                            </ListItem>
                        <ListItem>
                            <ListIcon icon="chevron-right" color="green.500" />
                            Javascript (ES6+)
                        </ListItem>

                        <ListItem>
                            <ListIcon icon="chevron-right" color="green.500" />
                            React & Redux
                        </ListItem>
                        <ListItem>
                            <ListIcon icon="chevron-right" color="green.500" />
                           Cypress , Jest, StoryBook
                        </ListItem>

                        <ListItem>
                            <ListIcon icon="chevron-right" color="green.500" />
                           Nodejs, Express , MongoDB
                        </ListItem>

                        <ListItem>
                            <ListIcon icon="chevron-right" color="green.500" />
                           Basics of AWS , TravisCI, Docker , Nginx
                        </ListItem>

                        <ListItem>
                            <ListIcon icon="chevron-right" color="green.500" />
                           Basics of Webpack, Gulp, Parcel
                        </ListItem>

                    </List>

                </Box>
            </SimpleGrid>

        </Box >
    )
}
export default About;