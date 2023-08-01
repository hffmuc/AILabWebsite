/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import { getNews } from '../../lib/contentful/pages/home';
import { getNewsCarousel } from '../../lib/strapi/pages/home';
import Carousel from '../../components/ui/Carousel';
import Title from '../../components/ui/Title';

const HomePage = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    getNewsCarousel().then((res) => setNews(res));
  }, []);

  return (
    <PageWrapper>
      <Title name="Neuigkeiten aus dem KI-Lab der HFF" textAlign="left" />
      {/* <Heading mb={6} fontSize={20} fontWeight="light">
        Neuigkeiten aus dem KI-Lab der HFF
      </Heading> */}
      <Carousel news={news} />
    </PageWrapper>
  );
};

export default HomePage;
