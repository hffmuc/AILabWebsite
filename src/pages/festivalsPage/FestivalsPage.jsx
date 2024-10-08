/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { Heading, Box, VStack, Text, Divider, Container, Link } from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { MONTH_NAMES, monthOrder } from '../../constants/monthNames';
import { getFestivalList, getFestivalsContent } from '../../lib/strapi/pages/festivals';
import { COLOR_SECONDARY, COLOR_TEXT_SECONDARY } from '../../constants/styles';
import renderMarkdown from '../../helpers/renderMarkdown';

const FestivalsPage = () => {
  const [festivals, setFestivals] = useState([]);
  const [introduction, setIntroduction] = useState();

  useEffect(() => {
    getFestivalList().then((res) => setFestivals(res));
    getFestivalsContent().then((res) => setIntroduction(res));
  }, []);

  const festivalsByMonth = monthOrder.reduce((acc, month) => {
    const filteredFestivals = festivals.filter((festival) => festival.attributes.month === month);
    if (filteredFestivals.length > 0) {
      acc[month] = filteredFestivals;
    }
    return acc;
  }, {});

  const festivalsWithoutMonth = festivals.filter((festival) => !festival.attributes.month);

  return (
    <PageWrapper>
      <Title name="KI Festivals" textAlign="left" />
      {/* <Container maxW="container.md" p={4}> */}
      <Box pb={12} mt={3} color={COLOR_TEXT_SECONDARY} w="100%">
        {renderMarkdown(introduction)}
      </Box>
      <VStack spacing={8} align="stretch" divider={<Divider mt={8} />}>
        {Object.keys(festivalsByMonth).map((month) => (
          <Box key={month}>
            <Title name={MONTH_NAMES[month]} />
            <VStack spacing={4} align="start">
              {festivalsByMonth[month].map((festival) => (
                <Festival festival={festival} key={festival.attributes.name} />
              ))}
            </VStack>
          </Box>
        ))}
        {festivalsWithoutMonth.length > 0 && (
          <Box>
            <Title name="Other Festivals" />
            <VStack spacing={3} align="start">
              {festivalsWithoutMonth.map((festival) => (
                <Festival festival={festival} key={festival.attributes.name} />
              ))}
            </VStack>
          </Box>
        )}
      </VStack>
      {/* </Container> */}
    </PageWrapper>
  );
};

const Festival = ({ festival }) => {
  return (
    <Box
      key={festival.attributes.name}
      p={4}
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md">
      {festival.attributes.link ? (
        <Link
          fontSize="lg"
          fontWeight="bold"
          href={festival.attributes.link}
          target="_blank"
          rel="noreferrer">
          {festival.attributes.name}
        </Link>
      ) : (
        <Box fontSize="lg" fontWeight="bold">
          {festival.attributes.name}
        </Box>
      )}
      <Box color={COLOR_SECONDARY} mt={2}>
        {festival.attributes.location}
      </Box>
      <Box mt={2}>{renderMarkdown(festival.attributes.shortDescription)}</Box>
    </Box>
  );
};
export default FestivalsPage;
