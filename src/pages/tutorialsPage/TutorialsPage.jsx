import React, { useState, useEffect } from 'react';
import {
  Box,
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
  Center,
  AccordionIcon,
  Heading,
  AspectRatio
} from '@chakra-ui/react';
import { v4 } from 'uuid';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { getTutorials } from '../../lib/contentful/pages/tutorials';
import { COLOR_BACKGROUND, COLOR_BACKGROUND_LIGHT } from '../../constants/styles';

const TutorialsPage = () => {
  const [tutorials, setTutorials] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tutorialDict, setTutorialDict] = useState({});

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  useEffect(() => {
    // getTutorialCategories().then((res) => setCategories(res));
    getTutorials().then((res) => setTutorials(res));
  }, []);

  return (
    <PageWrapper>
      <Title name="Tutorials & Recordings" />
      <Center>
        <Accordion allowMultiple allowToggle w="100%" maxW="800px">
          {Object.values(tutorials).map((category) => {
            return (
              <AccordionItem
                key={v4()}
                border="1px solid"
                mt={4}
                mb={4}
                backgroundColor={COLOR_BACKGROUND_LIGHT}>
                <Heading>
                  <AccordionButton backgroundColor={COLOR_BACKGROUND_LIGHT}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontFamily="Roboto Mono"
                      fontWeight="bold">
                      {category.name}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  {category.tutorialsCollection.items?.map((tutorialElement) => (
                    <Box key={v4()}>
                      <Box mt={4} fontWeight="semibold">
                        {tutorialElement.tutorialName}
                      </Box>
                      <Box mb={3} fontWeight="light">
                        {new Date(tutorialElement.date).toLocaleDateString('de-DE', dateOptions)}
                      </Box>
                      <AspectRatio maxW="800px" ratio={16 / 9}>
                        <iframe
                          width="560px"
                          height="315px"
                          src={tutorialElement.tutorialLink}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </AspectRatio>
                    </Box>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Center>
    </PageWrapper>
  );
};

export default TutorialsPage;
