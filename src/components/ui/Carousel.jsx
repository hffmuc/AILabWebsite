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
import { COLOR_BACKGROUND, COLOR_TEXT } from '../../constants/styles';

const Carousel = ({ news }) => {
  const [sliderRef, setSliderRef] = useState(null);

  // useEffect(() => {
  //   console.log(news);
  // }, [news]);
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
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
    <div className="content">
      <Slider ref={setSliderRef} {...sliderSettings}>
        {news?.map((newsElement) => (
          <Card maxW="md" backgroundColor={COLOR_BACKGROUND} color={COLOR_TEXT}>
            <CardBody>
              <Link to={newsElement.link}>
                <Image src={newsElement.image.url} borderRadius="lg" />
              </Link>
              <Stack mt="6" spacing="3">
                <Heading size="md">{newsElement.heading}</Heading>
                <Text>{newsElement.shortDescription}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
