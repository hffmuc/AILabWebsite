/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import { getNews } from '../../lib/contentful/pages/home';
import Carousel from '../../components/ui/Carousel';

const HomePage = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    getNews().then((res) => setNews(res));
  }, []);

  return (
    <PageWrapper>
      <Heading mb={6} fontSize={22} fontWeight="light">
        Recent News from the AI Lab
      </Heading>
      <Carousel news={news} />
    </PageWrapper>
  );
};

export default HomePage;
