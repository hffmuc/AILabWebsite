import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import {
  Box,
  Flex,
  HStack,
  Center,
  Image,
  Text,
  SimpleGrid,
  GridItem,
  UnorderedList,
  ListIcon,
  List,
  ListItem
} from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
// import ReactMarkdown from 'react-markdown';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
// import { getAboutContent, getAboutPhoto } from '../../lib/contentful/pages/about';
// import renderRichText from '../../helpers/renderRichText';
import renderMarkdown from '../../helpers/renderMarkdown';

import { getAboutContent, getAboutPhoto } from '../../lib/strapi/pages/about';

const AboutPage = () => {
  const [content, setContent] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    getAboutContent().then((res) => setContent(res));
    getAboutPhoto().then((res) => setPhoto(res));
  }, []);

  return (
    <PageWrapper>
      <Title name="Wer sind wir?" />
      <SimpleGrid columns={[3, 3, 3, 6]} spacing={10}>
        <GridItem colSpan={3}>
          <Flex>
            <Image src={photo} borderRadius={4} />
          </Flex>
        </GridItem>
        <GridItem colSpan={3}>
          {/* <Box textAlign="justify">{renderRichText(content)}</Box> */}
          <Box textAlign="justify">{renderMarkdown(content)}</Box>
        </GridItem>
      </SimpleGrid>
    </PageWrapper>
  );
};

export default AboutPage;
