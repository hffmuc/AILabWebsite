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
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { getAboutContent, getAboutPhoto } from '../../lib/contentful/pages/about';

const AboutPage = () => {
  const [content, setContent] = useState();
  const [photo, setPhoto] = useState();

  const options = {
    renderMark: {
      // [MARKS.BOLD]: (text) => `<custom-bold>${text}<custom-bold>`
    },
    renderNode: {
      // eslint-disable-next-line react/no-unstable-nested-components
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      // eslint-disable-next-line react/no-unstable-nested-components
      [BLOCKS.UL_LIST]: (node, children) => (
        <UnorderedList textAlign="start">{children}</UnorderedList>
      ),
      // eslint-disable-next-line react/no-unstable-nested-components
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>
    }
  };

  useEffect(() => {
    getAboutContent().then((res) => setContent(res));
    getAboutPhoto().then((res) => setPhoto(res));
  }, []);

  return (
    <PageWrapper>
      <Title name="Who are we?" />
      <SimpleGrid columns={[3, 3, 3, 6]} spacing={10}>
        <GridItem colSpan={3}>
          <Flex>
            <Image src={photo} borderRadius={4} />
          </Flex>
        </GridItem>
        <GridItem colSpan={3}>
          <Box textAlign="justify">{documentToReactComponents(content, options)}</Box>
        </GridItem>
      </SimpleGrid>
    </PageWrapper>
  );
};

export default AboutPage;
