import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Text, Box, Image, Center, VStack, Spacer, HStack } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { isMobile } from 'react-device-detect';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
// import { getBlogArticle } from '../../lib/contentful/pages/blog';
import { getBlogArticle } from '../../lib/strapi/pages/blog';
import formatDate from '../../helpers/formatDate';
import renderRichText from '../../helpers/renderRichText';
import { COLOR_TEXT, COLOR_TEXT_SECONDARY } from '../../constants/styles';
import renderMarkdown from '../../helpers/renderMarkdown';
import { getStrapiImage } from '../../helpers/getStrapiImage';

const BlogArticlePage = () => {
  const { slug } = useParams();
  const [blogArticle, setBlogArticle] = useState();

  useEffect(() => {
    getBlogArticle(slug).then((res) => {
      setBlogArticle(res);
    });
  }, []);

  useEffect(() => {
    // console.log(blogArticle);
  }, [blogArticle]);

  return (
    <PageWrapper>
      <Center>
        <VStack w={['100%', '100%', '80%', '65%', '50%']}>
          <Title name={blogArticle?.title} fontFamily="Roboto" />
          {!isMobile && (
            <HStack mt={0} color={COLOR_TEXT} fontWeight="light" pb={7}>
              <Box>
                {blogArticle?.authors?.data.map((author, index) => {
                  return index >= 1 ? `, ${author.attributes.name} ` : `${author.attributes.name}`; // add comma after first author
                })}
              </Box>
              <Box px={2}>|</Box>
              <Box>{formatDate(blogArticle?.date)}</Box>
            </HStack>
          )}

          {isMobile && (
            <VStack mt={0} color={COLOR_TEXT} fontWeight="light" pb={7}>
              <Box>
                {blogArticle?.authors?.data.map((author, index) => {
                  return index >= 1 ? `, ${author.attributes.name} ` : `${author.attributes.name}`; // add comma after first author
                })}
              </Box>
              <Box>{formatDate(blogArticle?.date)}</Box>
            </VStack>
          )}
          <Text w="100%" fontWeight="medium">
            {blogArticle?.shortDescription}
          </Text>

          <Image src={getStrapiImage(blogArticle?.image?.data.attributes.url)} w="100%" h="auto" />

          <Box w="100%">{renderMarkdown(blogArticle?.content)}</Box>
        </VStack>
      </Center>
    </PageWrapper>
  );
};

export default BlogArticlePage;
