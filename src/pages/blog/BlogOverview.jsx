import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import {
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Card,
  Center,
  CardBody,
  CardFooter,
  Box,
  Link
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { getBlogArticles } from '../../lib/contentful/pages/blog';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import {
  COLOR_BACKGROUND_SOLID_HOVER,
  COLOR_TEXT,
  COLOR_BACKGROUND,
  COLOR_TEXT_SECONDARY
} from '../../constants/styles';
import { PATH_BLOG, PATH_BLOG_ARTICLE } from '../../constants/pathNames';
import formatDate from '../../helpers/formatDate';

const BlogPreview = ({ title, date, authorsCollection, slug, image, shortDescription }) => {
  const location = useLocation();

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      boxShadow="none"
      backgroundColor={COLOR_BACKGROUND}
      mb={8}
      w="100%">
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        maxH="100%"
        src={image.url}
        alt="Caffe Latte"
      />

      <Stack w="100%">
        <CardBody color={COLOR_TEXT} pl={[3, 10]} pr={[3, 10]} py="auto">
          <Text pb={1} fontSize={['sm', 'md']}>
            {' '}
            {formatDate(date)}
          </Text>
          <Link href={`${PATH_BLOG}/${slug}`}>
            <Heading size={['sm', 'md']} pb={1}>
              {title}
            </Heading>
          </Link>
          <Text color={COLOR_TEXT_SECONDARY} pb={1} fontSize={['sm', 'md']}>
            {authorsCollection.items.map((name, index) => {
              return index >= 1 ? `, ${name.firstNameLastName} ` : `${name.firstNameLastName}`; // add comma after first author
            })}
          </Text>
          <Text py="0" noOfLines={3} fontSize={['sm', 'md']}>
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
      <Title name="Blog" />
      <Center>
        <Box w={['100%', '90%', '75%', '60%', '50%']}>
          {blogArticles.map((blogArticle) => (
            <BlogPreview {...blogArticle} key={v4()} />
          ))}
        </Box>
      </Center>
    </PageWrapper>
  );
};

export default BlogOverviewPage;
