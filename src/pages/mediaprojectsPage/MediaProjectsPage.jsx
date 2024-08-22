import { useState, useEffect } from 'react';
import { AspectRatio, Box, Divider, Flex, Link, VStack, Image } from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import renderMarkdown from '../../helpers/renderMarkdown';
import {
  getMediaProjectsContent,
  getMediaprojectsList
} from '../../lib/strapi/pages/mediaprojects';
import { COLOR_SECONDARY, COLOR_TEXT_SECONDARY } from '../../constants/styles';

const MediaProjectsPage = () => {
  const [introduction, setIntroduction] = useState();

  const [mediaprojects, setMediaprojects] = useState([]);

  useEffect(() => {
    getMediaprojectsList().then((res) => setMediaprojects(res));
    getMediaProjectsContent().then((res) => setIntroduction(res));
  }, []);

  return (
    <PageWrapper>
      <Title name="KI Medienprojekte" textAlign="left" />
      {/* <Container maxW="container.md" p={4}> */}
      <Box pb={12} mt={3} color={COLOR_TEXT_SECONDARY} w="100%">
        {renderMarkdown(introduction)}
      </Box>
      <VStack spacing={8} divider={<Divider />}>
        {mediaprojects.map((mediaproject) => (
          <MediaProject mediaproject={mediaproject} key={mediaproject.attributes.name} />
        ))}
      </VStack>
    </PageWrapper>
  );
};

const MediaProject = ({ mediaproject }) => {
  return (
    <Flex gap={8} w="100%" wrap="wrap">
      <VStack w="100%" align="start">
        {mediaproject.attributes.link ? (
          <Link href={mediaproject.attributes.link} target="_blank" rel="noreferrer">
            <Box textAlign="left" fontSize="lg" fontWeight="bold">
              {mediaproject.attributes.name}{' '}
              {mediaproject.attributes.releaseYear && `(${mediaproject.attributes.releaseYear})`}
            </Box>
          </Link>
        ) : (
          <Box textAlign="left" fontSize="lg" fontWeight="bold">
            {mediaproject.attributes.name}{' '}
            {mediaproject.attributes.releaseYear && `(${mediaproject.attributes.releaseYear})`}
          </Box>
        )}
        {mediaproject.attributes.artists && (
          <Box textAlign="left" fontSize="md" color={COLOR_SECONDARY}>
            von {mediaproject.attributes.artists}
          </Box>
        )}

        <Box>{renderMarkdown(mediaproject.attributes.description)}</Box>
      </VStack>

      {mediaproject.attributes.image?.data?.attributes?.url && (
        <Box flex="1" display="flex">
          <Image
            maxW="800px"
            minW={['100%', '100%', '100%', 'initial']}
            w="100%"
            h="auto"
            src={mediaproject.attributes.image.data.attributes.url}
          />
        </Box>
      )}

      {mediaproject.attributes.videoLink && (
        <AspectRatio
          ratio={16 / 9}
          minW={['100%', '100%', '100%', 'initial']}
          maxW="800px"
          flex="1">
          <iframe
            title={mediaproject.attributes.videoLink}
            width="560px"
            height="315px"
            src={mediaproject.attributes.videoLink}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      )}
      {mediaproject.attributes.videoLink2 && (
        <AspectRatio
          ratio={16 / 9}
          flex="1"
          maxW="800px"
          minW={['100%', '100%', '100%', 'initial']}>
          <iframe
            title={mediaproject.attributes.videoLink2}
            width="560px"
            height="315px"
            src={mediaproject.attributes.videoLink2}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      )}
    </Flex>
    // </VStack>
  );
};

export default MediaProjectsPage;
