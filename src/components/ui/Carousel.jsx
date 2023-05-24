/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */

import Slider from 'react-slick';
import {
  Link,
  Button,
  LinkBox,
  Wrap,
  WrapItem,
  Box,
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  Text,
  Image,
  Divider,
  ButtonGroup
} from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { isMobile } from 'react-device-detect';
import { COLOR_BACKGROUND, COLOR_TEXT } from '../../constants/styles';

const Carousel = ({ news }) => {
  const [sliderRef, setSliderRef] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(news);
  }, [news]);
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    // infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Box
      className="content"
      borderRadius="sm"
      backgroundColor={COLOR_BACKGROUND}
      ml={isMobile ? 6 : 0}
      mr={isMobile ? 6 : 0}>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {news?.map((newsElement) => {
          // eslint-disable-next-line no-underscore-dangle
          if (newsElement.__typename === 'News') {
            return (
              <Box p={1} key={v4()}>
                <Card color={COLOR_TEXT} boxShadow="none">
                  <CardBody>
                    <Link href={newsElement.link}>
                      <Image src={`${newsElement.image.url}?w=500`} borderRadius="sm" />
                    </Link>

                    <Stack mt="6" spacing="3">
                      <Link fontSize="md" fontWeight="bold" href={newsElement.link}>
                        {newsElement.heading}
                      </Link>
                      <Box fontSize="sm">{newsElement.shortDescription}</Box>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
            );
          }
          // eslint-disable-next-line no-underscore-dangle
          if (newsElement.__typename === 'BlogArticle') {
            return (
              <Box p={1} key={v4()}>
                <Card color={COLOR_TEXT} boxShadow="none">
                  <CardBody>
                    <Link href={`/blog/${newsElement.slug}`}>
                      <Image src={`${newsElement.image.url}?w=500`} borderRadius="sm" />
                    </Link>

                    <Stack mt="6" spacing="3">
                      <Link fontSize="md" fontWeight="bold" href={newsElement.link}>
                        {newsElement.title}
                      </Link>
                      <Box fontSize="sm">{newsElement.shortDescription}</Box>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
            );
          }
          return null;
        })}
      </Slider>
    </Box>
  );
};

export default Carousel;
