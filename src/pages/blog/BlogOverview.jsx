import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { Heading, Text, Stack, Image, Card, CardBody, Link } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
// import { getBlogArticles } from '../../lib/contentful/pages/blog';
import { getBlogArticles } from '../../lib/strapi/pages/blog';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { COLOR_TEXT, COLOR_BACKGROUND, COLOR_TEXT_SECONDARY } from '../../constants/styles';
import { PATH_BLOG, PATH_BLOG_ARTICLE } from '../../constants/pathNames';
import formatDate from '../../helpers/formatDate';
// import { getStrapiImage } from '../../helpers/getStrapiImage';

const BlogPreview = ({ title, slug, date, authors, image, shortDescription }) => {
  const location = useLocation();

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      borderRadius={1}
      boxShadow="none"
      backgroundColor={COLOR_BACKGROUND}
      mb={8}
      maxH={['100%', '240px']}
      w="100%">
      <Image
        objectFit="cover"
        // maxW={{ base: '100%', sm: '300px' }}
        h={['180px', 'inherit']}
        w={['100%', '150px', '200px', '300px']}
        // maxh={['220px', 'inherit']}
        src={image.data.attributes.url}
        alt="Caffe Latte"
      />

      <Stack w="100%">
        <CardBody color={COLOR_TEXT} pl={[3, 10]} pr={[3, 10]} py="auto">
          <Text fontSize={['sm', 'md']}> {formatDate(date)}</Text>
          <Link href={`${PATH_BLOG}/${slug}`}>
            <Heading size={['sm', 'md']}>{title}</Heading>
          </Link>
          <Text color={COLOR_TEXT_SECONDARY} fontSize={['sm', 'md']}>
            {authors.data.map((name, index) => {
              return index >= 1 ? `, ${name.attributes.name} ` : `${name.attributes.name}`; // add comma after first author
            })}
          </Text>
          <Text py="0" noOfLines={[3, 1, 2, 2, 3]} fontSize={['sm', 'md']}>
            {shortDescription}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

const BlogOverviewPage = () => {
  const [blogArticles, setBlogArticles] = useState([]);
  useEffect(() => {
    getBlogArticles().then((res) => setBlogArticles(res));
  }, []);

  return (
    <PageWrapper>
      {/* <ContentWrapper> */}
      <Title name="KI-Lab Blog" textAlign="left" />
      {blogArticles.map((blogArticle) => (
        <BlogPreview {...blogArticle.attributes} key={v4()} />
      ))}
      {/* </ContentWrapper> */}
    </PageWrapper>
  );
};

export default BlogOverviewPage;
