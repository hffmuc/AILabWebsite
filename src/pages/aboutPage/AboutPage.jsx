import React, { useEffect, useState } from 'react';
import { Box, Flex, HStack, Center, Image, Text, SimpleGrid, GridItem } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import gruppenfoto from '../../images/Gruppenfoto.png';
import { getAboutContent, getAboutPhoto } from '../../lib/contentful/pages/about';

const AboutPage = () => {
  const [content, setContent] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    getAboutContent().then((res) => setContent(res));
    getAboutPhoto().then((res) => setPhoto(res));
  }, []);
  return (
    <PageWrapper>
      <Title name="Who are we?" />
      <SimpleGrid columns={[3, 3, 3, 6]} spacing={10} mt={10}>
        <GridItem colSpan={3}>
          <Flex>
            <Image src={photo} />
          </Flex>
        </GridItem>
        <GridItem colSpan={3}>
          <Box textAlign="justify">{documentToReactComponents(content)}</Box>
        </GridItem>
      </SimpleGrid>
    </PageWrapper>
  );
};

export default AboutPage;
