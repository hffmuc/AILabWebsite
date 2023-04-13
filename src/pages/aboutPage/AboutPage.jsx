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
  ListItem
} from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { getAboutContent, getAboutPhoto, getTeamMembers } from '../../lib/contentful/pages/about';

const AboutPage = () => {
  const [content, setContent] = useState();
  const [photo, setPhoto] = useState();
  const [teamMembers, setTeamMembers] = useState();

  useEffect(() => {
    getAboutContent().then((res) => setContent(res));
    getAboutPhoto().then((res) => setPhoto(res));
    getTeamMembers().then((res) => setTeamMembers(res));
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
          <Box textAlign="justify">{documentToReactComponents(content)}</Box>
        </GridItem>
        <GridItem colSpan={3}>
          <Box fontWeight="bold">This is our team:</Box>
          <UnorderedList>
            {teamMembers?.map((el) => (
              <ListItem key={v4()}>{el}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
      </SimpleGrid>
    </PageWrapper>
  );
};

export default AboutPage;
