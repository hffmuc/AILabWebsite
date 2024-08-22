import { useState, useEffect } from 'react';
import { AspectRatio, Box, Container, Divider, Flex, Link, VStack, Wrap } from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import renderMarkdown from '../../helpers/renderMarkdown';
import { getFilmList, getFilmsContent } from '../../lib/strapi/pages/films';
import { COLOR_SECONDARY, COLOR_TEXT_SECONDARY } from '../../constants/styles';

const FilmPage = () => {
  const [films, setFilms] = useState([]);
  const [introduction, setIntroduction] = useState();

  useEffect(() => {
    getFilmList().then((res) => setFilms(res));
    getFilmsContent().then((res) => setIntroduction(res));
  }, []);

  return (
    <PageWrapper>
      <Title name="KI Filme" textAlign="left" />
      {/* <Container maxW="container.md" p={4}> */}
      <Box pb={12} mt={3} color={COLOR_TEXT_SECONDARY} w="100%">
        {renderMarkdown(introduction)}
      </Box>
      <VStack spacing={8} divider={<Divider />}>
        {films.map((film) => (
          <Film film={film} key={film.attributes.filmtitle} />
        ))}
      </VStack>
      {/* </Container> */}
    </PageWrapper>
  );
};

const Film = ({ film }) => {
  return (
    <Wrap spacing={8} w="100%">
      <VStack flex="1" align="stretch">
        {film.attributes.link ? (
          <Link href={film.attributes.link} target="_blank" rel="noreferrer">
            <Box textAlign="left" fontSize="lg" fontWeight="bold">
              {film.attributes.filmtitle}{' '}
              {film.attributes.releaseYear && `(${film.attributes.releaseYear})`}
            </Box>
          </Link>
        ) : (
          <Box textAlign="left" fontSize="lg" fontWeight="bold">
            {film.attributes.filmtitle}{' '}
            {film.attributes.releaseYear && `(${film.attributes.releaseYear})`}
          </Box>
        )}
        {film.attributes.filmmaker && (
          <Box textAlign="left" fontSize="md" color={COLOR_SECONDARY}>
            von {film.attributes.filmmaker}{' '}
            {film.attributes.length && `| ${film.attributes.length} min`}
          </Box>
        )}

        <Box>{renderMarkdown(film.attributes.description)}</Box>
      </VStack>

      {film.attributes.videoLink && (
        <AspectRatio ratio={16 / 9} w={['100%', '100%', '100%', '50%', '40%']} maxW="800px">
          <iframe
            title={film.attributes.filmtitle}
            width="560px"
            height="315px"
            src={film.attributes.videoLink}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      )}
    </Wrap>
  );
};
export default FilmPage;
