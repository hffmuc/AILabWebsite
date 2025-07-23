import { useEffect, useState } from 'react';
import {
  Heading,
  Box,
  VStack,
  Text,
  Divider,
  Container,
  Link,
} from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { MONTH_NAMES, monthOrder } from '../../constants/monthNames';
import {
  getFestivalList,
  getFestivalsContent,
} from '../../lib/strapi/pages/festivals';
import { COLOR_SECONDARY, COLOR_TEXT_SECONDARY } from '../../constants/styles';
import renderMarkdown from '../../helpers/renderMarkdown';
import { useTranslation } from 'react-i18next';

const FestivalsPage = () => {
  const [festivals, setFestivals] = useState([]);
  const [introduction, setIntroduction] = useState();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getFestivalList().then((res) => setFestivals(res));
    getFestivalsContent().then((res) => setIntroduction(res));
  }, [i18n.language]);

  const festivalsByMonth = monthOrder.reduce((acc, month) => {
    const filteredFestivals = festivals.filter(
      (festival) => festival.month === month
    );
    if (filteredFestivals.length > 0) {
      acc[month] = filteredFestivals;
    }
    return acc;
  }, {});

  const festivalsWithoutMonth = festivals.filter((festival) => !festival.month);

  return (
    <PageWrapper>
      <Title name={t('festivals.title')} textAlign="left" />
      {/* <Container maxW="container.md" p={4}> */}
      <Box pb={6} mt={3} color={COLOR_TEXT_SECONDARY} w="100%">
        {renderMarkdown(introduction)}
      </Box>
      <VStack spacing={6} align="stretch" divider={<Divider />}>
        {Object.keys(festivalsByMonth).map((month) => (
          <Box key={month}>
            <Box fontSize="xl" mb={4}>{MONTH_NAMES[month]}</Box>
            <VStack spacing={4} align="start">
              {festivalsByMonth[month].map((festival) => (
                <Festival festival={festival} key={festival.name} />
              ))}
            </VStack>
          </Box>
        ))}
        {festivalsWithoutMonth.length > 0 && (
          <Box>
            <Title name={t('festivals.otherFestivals')} />
            <VStack spacing={3} align="start">
              {festivalsWithoutMonth.map((festival) => (
                <Festival festival={festival} key={festival.name} />
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
      key={festival.name}
      p={4}
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
    >
      {festival.link ? (
        <Link
          fontSize="lg"
          fontWeight="bold"
          href={festival.link}
          target="_blank"
          rel="noreferrer"
        >
          {festival.name}
        </Link>
      ) : (
        <Box fontSize="lg" fontWeight="bold">
          {festival.name}
        </Box>
      )}
      <Box color={COLOR_SECONDARY} mt={2}>
        {festival.location}
      </Box>
      <Box mt={2}>{renderMarkdown(festival.shortDescription)}</Box>
    </Box>
  );
};
export default FestivalsPage;
