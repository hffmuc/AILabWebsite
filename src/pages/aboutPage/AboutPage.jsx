import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, SimpleGrid, GridItem } from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import renderMarkdown from '../../helpers/renderMarkdown';

import { getAboutContent, getAboutPhoto, getTeamContent } from '../../lib/strapi/pages/about';

const AboutPage = () => {
  const [content, setContent] = useState();
  const [photo, setPhoto] = useState();
  const [teamContent, setTeamContent] = useState();

  useEffect(() => {
    getAboutContent().then((res) => setContent(res));
    getAboutPhoto().then((res) => setPhoto(res));
    getTeamContent().then((res) => setTeamContent(res));
  }, []);

  return (
    <PageWrapper>
      <Title name="Der Lehrstuhl KI an der HFF" textAlign="left" />
      <SimpleGrid columns={[3, 3, 3, 6]} spacing={10}>
        <GridItem colSpan={3}>
          <Flex>
            <Image src={photo} borderRadius={4} />
          </Flex>
        </GridItem>
        <GridItem colSpan={3}>
          <Box textAlign="justify">{renderMarkdown(content)}</Box>
        </GridItem>
        <GridItem colSpan={3}>{renderMarkdown(teamContent)}</GridItem>
      </SimpleGrid>
    </PageWrapper>
  );
};

export default AboutPage;
