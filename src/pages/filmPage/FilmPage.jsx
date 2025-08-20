import { useState, useEffect } from 'react';
import {
  AspectRatio,
  Box,
  Container,
  Divider,
  Flex,
  Link,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import renderMarkdown from '../../helpers/renderMarkdown';
import { getFilmList, getFilmsContent } from '../../lib/strapi/pages/films';
import { COLOR_SECONDARY, COLOR_TEXT_SECONDARY } from '../../constants/styles';
import { useTranslation } from 'react-i18next';
import Section from '../../components/ui/Section';

const FilmPage = () => {
  const [films, setFilms] = useState([]);
  const [introduction, setIntroduction] = useState();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getFilmList().then((res) => setFilms(res));
    getFilmsContent().then((res) => setIntroduction(res));
  }, [i18n.language]);

  return (
    <PageWrapper>
      <Title name={t('films.title')} textAlign="left" />
      {/* <Container maxW="container.md" p={4}> */}
      <Box my={3} mb={6} color={COLOR_TEXT_SECONDARY} w="100%">
        {renderMarkdown(introduction)}
      </Box>
      <VStack spacing={3}>
        {films.map((film) => (
          <Film film={film} key={film.filmtitle} />
        ))}
      </VStack>
      {/* </Container> */}
    </PageWrapper>
  );
};

const Film = ({ film }) => {
  const { t, i18n } = useTranslation();
  return (
    <Section>
      <Wrap spacing={8} w="100%">
        <VStack flex="1" align="stretch">
          {film.link ? (
            <Link href={film.link} target="_blank" rel="noreferrer">
              <Box textAlign="left" fontSize="lg" fontWeight="bold">
                {film.filmtitle} {film.releaseYear && `(${film.releaseYear})`}
              </Box>
            </Link>
          ) : (
            <Box textAlign="left" fontSize="lg" fontWeight="bold">
              {film.filmtitle} {film.releaseYear && `(${film.releaseYear})`}
            </Box>
          )}
          {film.filmmaker && (
            <Box textAlign="left" fontSize="md" color={COLOR_SECONDARY}>
              {t('by')} {film.filmmaker} {film.length && `| ${film.length} min`}
            </Box>
          )}

          <Box>{renderMarkdown(film.description)}</Box>
        </VStack>

        {film.videoLink && (
          <AspectRatio
            ratio={16 / 9}
            w={['100%', '100%', '100%', '50%', '40%']}
            maxW="800px"
          >
            <iframe
              title={film.filmtitle}
              width="560px"
              height="315px"
              src={film.videoLink}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        )}
      </Wrap>
    </Section>
  );
};
export default FilmPage;
