import React from 'react';
import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';

const AboutPage = () => {
  return (
    <PageWrapper>
      <Title name="Who are we?" />
      <HStack paddingTop={6} spacing={12}>
        <Box>
          <Image src="https://www.alambassociates.com/wp-content/uploads/2016/10/maxresdefault.jpg" />
        </Box>
        <Box>
          <Text>
            Since May 2022, the HFF has had the Chair for AI in Media Production. This was made
            possible by a competition of the Hightech Agenda Bayern, in which the HFF won one of the
            coveted AI professorships.
          </Text>
          <Text>
            We would like to teach the topic of AI in a very practical way, demonstrating its use in
            film production, among other things. Examples are the search of large amounts of film
            data, the use in the VFX area and the generation of special film sequences by means of
            AI technologies. The topic of AI is interdisciplinary and affects many areas of film
            production, and AI topics will be integrated into their course offerings in the near
            future. In doing so, we want to show the potential of this technology for film
            production, but also include the legal and ethical aspects.
          </Text>
          <Text>
            A major challenge here is the insanely fast development of this field. In addition to
            imparting knowledge about the use of AI in film production, we also support artistic
            projects that use AI in the production process or deal with the topic of AI.
          </Text>
        </Box>
      </HStack>
    </PageWrapper>
  );
};

export default AboutPage;
