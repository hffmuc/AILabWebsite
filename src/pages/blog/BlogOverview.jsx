import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import {
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Card,
  CardBody,
  CardFooter,
  Box,
  Link
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { getBlogArticles } from '../../lib/contentful/pages/blog';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { COLOR_TEXT } from '../../constants/styles';
import { PATH_BLOG, PATH_BLOG_ARTICLE } from '../../constants/pathNames';

const BlogPreview = ({ title, date, author, shortDescription }) => {
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const location = useLocation();

  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" boxShadow="none" my={8}>
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody color={COLOR_TEXT} px={[0, 10]}>
          <Link href={`${PATH_BLOG}/Test`}>
            <Heading size="md">{title}</Heading>
          </Link>
          <Text>{author}</Text>
          <Text> {new Date(date).toLocaleDateString('de-DE', dateOptions)}</Text>
          <Text py="2">{shortDescription}</Text>
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
      <Box px={[0, 10, 20, 40, 80]}>
        {blogArticles.map((blogArticle) => (
          <BlogPreview {...blogArticle} key={v4()} />
        ))}
      </Box>
    </PageWrapper>
  );
};

export default BlogOverviewPage;
