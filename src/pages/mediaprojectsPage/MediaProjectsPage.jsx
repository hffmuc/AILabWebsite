import { useState, useEffect } from 'react';
import {
  AspectRatio,
  Box,
  Divider,
  Flex,
  Link,
  VStack,
  Image,
} from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import renderMarkdown from '../../helpers/renderMarkdown';
import {
  getMediaProjectsContent,
  getMediaprojectsList,
} from '../../lib/strapi/pages/mediaprojects';
import { useTranslation } from 'react-i18next';
import { COLOR_SECONDARY, COLOR_TEXT_SECONDARY } from '../../constants/styles';
import Section from '../../components/ui/Section';

const MediaProjectsPage = () => {
  const [introduction, setIntroduction] = useState();

  const [mediaprojects, setMediaprojects] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getMediaprojectsList().then((res) => setMediaprojects(res));
    getMediaProjectsContent().then((res) => setIntroduction(res));
  }, [i18n.language]);

  return (
    <PageWrapper>
      <Title name={t('mediaprojects.title')} textAlign="left" />
      <Box my={3} mb={6} color={COLOR_TEXT_SECONDARY} w="100%">
        {renderMarkdown(introduction)}
      </Box>
      <VStack spacing={3}>
        {mediaprojects.map((mediaproject) => (
          <MediaProject mediaproject={mediaproject} key={mediaproject.name} />
        ))}
      </VStack>
    </PageWrapper>
  );
};

const MediaProject = ({ mediaproject }) => {
  return (
    <Section>
      <Flex gap={8} w="100%" wrap="wrap">
        <VStack w="100%" align="start">
          {mediaproject.link ? (
            <Link href={mediaproject.link} target="_blank" rel="noreferrer">
              <Box textAlign="left" fontSize="lg" fontWeight="bold">
                {mediaproject.name}{' '}
                {mediaproject.releaseYear && `(${mediaproject.releaseYear})`}
              </Box>
            </Link>
          ) : (
            <Box textAlign="left" fontSize="lg" fontWeight="bold">
              {mediaproject.name}{' '}
              {mediaproject.releaseYear && `(${mediaproject.releaseYear})`}
            </Box>
          )}
          {mediaproject.artists && (
            <Box textAlign="left" fontSize="md" color={COLOR_SECONDARY}>
              von {mediaproject.artists}
            </Box>
          )}

          <Box>{renderMarkdown(mediaproject.description)}</Box>
        </VStack>

        {mediaproject.image?.url && (
          <Box flex="1" display="flex">
            <Image
              maxW="800px"
              minW={['100%', '100%', '100%', 'initial']}
              w="100%"
              h="auto"
              src={mediaproject.image.url}
            />
          </Box>
        )}

        {mediaproject.videoLink && (
          <AspectRatio
            ratio={16 / 9}
            minW={['100%', '100%', '100%', 'initial']}
            maxW="800px"
            flex="1"
          >
            <iframe
              title={mediaproject.videoLink}
              width="560px"
              height="315px"
              src={mediaproject.videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        )}
        {mediaproject.videoLink2 && (
          <AspectRatio
            ratio={16 / 9}
            flex="1"
            maxW="800px"
            minW={['100%', '100%', '100%', 'initial']}
          >
            <iframe
              title={mediaproject.videoLink2}
              width="560px"
              height="315px"
              src={mediaproject.videoLink2}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        )}
      </Flex>
    </Section>
  );
};

export default MediaProjectsPage;
