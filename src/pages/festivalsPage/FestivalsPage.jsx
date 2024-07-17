/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { Heading, Box, VStack, Text, Divider, Container, Link } from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { MONTH_NAMES, monthOrder } from '../../constants/monthNames';
import { getFestivalList } from '../../lib/strapi/pages/festivals';
import { COLOR_SECONDARY } from '../../constants/styles';
import renderMarkdown from '../../helpers/renderMarkdown';

const FestivalsPage = () => {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    getFestivalList().then((res) => setFestivals(res));
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
      <VStack spacing={8} align="stretch" divider={<Divider mt={8} />}>
        {Object.keys(festivalsByMonth).map((month) => (
          <Box key={month}>
            <Title name={MONTH_NAMES[month]} />
            <VStack spacing={3} align="start">
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
        <Text fontSize="lg" fontWeight="bold">
          {festival.attributes.name}
        </Text>
      )}
      <Text color={COLOR_SECONDARY}>{festival.attributes.location}</Text>
      <Text>{renderMarkdown(festival.attributes.shortDescription)}</Text>
    </Box>
  );
};
export default FestivalsPage;
