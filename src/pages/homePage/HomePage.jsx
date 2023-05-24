/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { Image, Wrap, Heading, Box, Card, CardBody, Link, Stack } from '@chakra-ui/react';
import { v4 } from 'uuid';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { getCoverImage, getNews } from '../../lib/contentful/pages/home';
import Carousel from '../../components/ui/Carousel';
import { AdvancedCarousel, CarouselItem } from '../../components/ui/AdvancedCarousel';
import { COLOR_TEXT } from '../../constants/styles';

const HomePage = () => {
  const [coverImage, setCoverImage] = useState();
  const [news, setNews] = useState();
  // const [items, setItems] = useState();

  const items = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/500?idx=${i}`
  }));

  // useEffect(() => {
  //   const newItems = Array.from({ length: 20 }).map((_, i) => ({
  //     id: i,
  //     src: `https://picsum.photos/500?idx=${i}`
  //   }));
  //   console.log(newItems);
  //   setItems(newItems);
  // }, []);

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
      <Heading mb={6} fontSize={24}>
        Recent News from the AI Lab
      </Heading>
      {/* <Carousel news={news} /> */}
      {news && (
        <AdvancedCarousel
          items={news}
          renderItem={({ item, isSnapPoint }) => (
            <CarouselItem key={v4()} isSnapPoint={isSnapPoint}>
              {
                // eslint-disable-next-line no-underscore-dangle
                item.__typename === 'News' ? (
                  <Box key={v4()}>
                    <Card color={COLOR_TEXT} boxShadow="none">
                      <CardBody>
                        <Link href={item.link}>
                          <Image src={`${item.image.url}?w=500`} borderRadius="sm" />
                        </Link>

                        <Stack mt="6" spacing="3">
                          <Link fontSize="md" fontWeight="bold" href={item.link}>
                            {item.heading}
                          </Link>
                          <Box fontSize="sm">{item.shortDescription}</Box>
                        </Stack>
                      </CardBody>
                    </Card>
                  </Box>
                ) : // eslint-disable-next-line no-underscore-dangle
                item.__typename === 'BlogArticle' ? (
                  <Box key={v4()}>
                    <Card color={COLOR_TEXT} boxShadow="none">
                      <CardBody>
                        <Link href={`/blog/${item.slug}`}>
                          <Image src={`${item.image.url}?w=500`} borderRadius="sm" />
                        </Link>

                        <Stack mt="6" spacing="3">
                          <Link fontSize="md" fontWeight="bold" href={item.link}>
                            {item.title}
                          </Link>
                          <Box fontSize="sm">{item.shortDescription}</Box>
                        </Stack>
                      </CardBody>
                    </Card>
                  </Box>
                ) : (
                  []
                )
              }
            </CarouselItem>
          )}
        />
      )}
    </PageWrapper>
  );
};

export default HomePage;
