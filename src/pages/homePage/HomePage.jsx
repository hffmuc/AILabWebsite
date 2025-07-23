import { useEffect, useState } from 'react';
import {
  Heading,
  SimpleGrid,
  GridItem,
  Flex,
  Image,
  Box,
} from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import { getNewsCarousel } from '../../lib/strapi/pages/home';
import Carousel from '../../components/ui/Carousel';
import Title from '../../components/ui/Title';
import {
  getAboutContent,
  getAboutPhoto,
  getTeamContent,
} from '../../lib/strapi/pages/about';
import renderMarkdown from '../../helpers/renderMarkdown';
import { COLOR_BACKGROUND } from '../../constants/styles';
import Section from '../../components/ui/Section';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const [news, setNews] = useState();
  const [content, setContent] = useState();
  const [photo, setPhoto] = useState();
  const [teamContent, setTeamContent] = useState();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getAboutContent().then((res) => setContent(res));
    getAboutPhoto().then((res) => setPhoto(res));
    getTeamContent().then((res) => setTeamContent(res));
  }, [i18n.language]);

  useEffect(() => {
    getNewsCarousel().then((res) => setNews(res));
  }, [i18n.language]);

  return (
    <PageWrapper>
      {/* <Heading mb={6} fontSize={20} fontWeight="light">
        Neuigkeiten aus dem KI-Lab der HFF
      </Heading> */}
      <Title name={t('home.title')} textAlign="left" />
      <Box borderRadius="1" backgroundColor={COLOR_BACKGROUND} my={4}>
        <Box pt={4} px={4} />
        <Carousel news={news} />
      </Box>
      <Title name={t('home.about')} textAlign="left" />
      <Section>
        <SimpleGrid columns={[3, 3, 3, 3, 12, 12]} spacing={8}>
          <GridItem colSpan={[3, 3, 3, 3, 6, 6]}>
            <Flex>
              <Image src={photo} borderRadius={0} />
            </Flex>
            <Box mt={4}>{renderMarkdown(teamContent)}</Box>
          </GridItem>
          <GridItem colSpan={[3, 3, 3, 3, 6, 6]}>
            <Box textAlign="justify">{renderMarkdown(content)}</Box>
          </GridItem>
        </SimpleGrid>
      </Section>
    </PageWrapper>
  );
};

export default HomePage;
