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
  AspectRatio,
  Divider
} from '@chakra-ui/react';
import { v4 } from 'uuid';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
// import { getTutorials } from '../../lib/contentful/pages/tutorials';
import { getTutorials } from '../../lib/strapi/pages/tutorials';
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
      <Title name="Tutorials & Aufzeichnungen" />
      <Center>
        <Accordion allowMultiple w="100%" maxW="800px">
          {Object.values(tutorials).map((category) => {
            return (
              <AccordionItem
                key={v4()}
                border="1px solid"
                mt={4}
                mb={4}
                backgroundColor={COLOR_BACKGROUND}>
                <Heading>
                  <AccordionButton backgroundColor={COLOR_BACKGROUND}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontFamily="Roboto Mono"
                      fontWeight="bold">
                      {category.attributes.name}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  {category.attributes.tutorials.data?.map((tutorialElement, id) => (
                    <>
                      {id !== 0 && <Divider my={6} />}
                      <Box key={v4()}>
                        <Box my={2} fontWeight="semibold">
                          {tutorialElement.attributes.title}
                        </Box>
                        <Box mb={3} fontWeight="light">
                          {new Date(tutorialElement.attributes.date).toLocaleDateString(
                            'de-DE',
                            dateOptions
                          )}
                        </Box>
                        <AspectRatio maxW="800px" ratio={16 / 9}>
                          <iframe
                            width="560px"
                            height="315px"
                            src={tutorialElement.attributes.embedLink}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </AspectRatio>
                      </Box>
                    </>
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
