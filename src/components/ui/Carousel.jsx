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
// import './Carousel.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { isMobile } from 'react-device-detect';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { COLOR_BACKGROUND, COLOR_TEXT } from '../../constants/styles';
// import { getStrapiImage } from '../../helpers/getStrapiImage';

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Box
      left={['-23px', '-27px', '-30px']}
      top={['50%']}
      zIndex="3"
      style={{
        position: 'absolute',
        display: 'block',

        width: '25px',
        height: '25px',
        padding: 0,
        WebkitTransform: 'translate(0, -50%)',
        msTransform: 'translate(0, -50%)',
        transform: 'translate(0, -50%)',

        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        background: 'transparent'
      }}
      onClick={onClick}>
      <ChevronLeftIcon w="100%" h="100%" p="0" />
    </Box>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Box
      right={['-23px', '-27px', '-30px']}
      top={['50%']}
      zIndex="3"
      style={{
        position: 'absolute',
        // top: '50%',

        display: 'block',

        width: '25px',
        height: '25px',
        padding: 0,
        WebkitTransform: 'translate(0, -50%)',
        msTransform: 'translate(0, -50%)',
        transform: 'translate(0, -50%)',

        cursor: 'pointer',
        // right: '-30px',
        border: 'none',
        outline: 'none',
        background: 'transparent'
      }}
      onClick={onClick}>
      <ChevronRightIcon w="100%" h="100%" p="0" />
    </Box>
  );
};

const Carousel = ({ news }) => {
  // const [sliderRef, setSliderRef] = useState(0);
  const navigate = useNavigate();

  const sliderSettings = {
    slidesToShow: 4,
    // arrows: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Box className="content" borderRadius="1" backgroundColor={COLOR_BACKGROUND} mx={0}>
      {news && (
        <Slider {...sliderSettings}>
          {news?.map((newsElement) => {
            // eslint-disable-next-line no-underscore-dangle

            return (
              <Box px={[0, 4]} py={[0, 4, 6]} key={v4()}>
                <Card color={COLOR_TEXT} boxShadow="none" bg="none">
                  <CardBody p={0}>
                    <Link href={newsElement.attributes.link}>
                      <Image
                        src={
                          newsElement.attributes.image.data.attributes.formats?.small
                            ? newsElement.attributes.image.data.attributes.formats.small.url
                            : newsElement.attributes.image.data.attributes.url
                        }
                        borderRadius="0"
                      />
                    </Link>

                    <Stack mt={[4, 6]} spacing="3" px={[4, 0]} pb={[4, 2]}>
                      <Link fontWeight="bold" href={newsElement.attributes.link}>
                        {newsElement.attributes.title}
                      </Link>
                      <Box>{newsElement.attributes.shortDescription}</Box>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
            );
          })}
        </Slider>
      )}
    </Box>
  );
};

export default Carousel;
