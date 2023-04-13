import { useEffect, useState } from 'react';
import { Image, Wrap, Heading } from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { getCoverImage, getNews } from '../../lib/contentful/pages/home';
import Carousel from '../../components/ui/Carousel';

const HomePage = () => {
  const [coverImage, setCoverImage] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    getCoverImage().then((res) => setCoverImage(res));
    getNews().then((res) => setNews(res));
  }, []);

  // useEffect(() => {
  //   console.log(news);
  // }, [news]);
  return (
    <PageWrapper>
      {/* <Image src={coverImage} maxW="100%" w="520px" borderRadius={4} mb="7" /> */}

      <Heading size="lg" mb={6}>
        Recent Updates
      </Heading>
      <Carousel news={news} />
    </PageWrapper>
  );
};

export default HomePage;
