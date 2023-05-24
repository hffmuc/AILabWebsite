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
import formatDate from '../../helpers/formatDate';

const BlogPreview = ({ title, date, authorsCollection, slug, image, shortDescription }) => {
  const location = useLocation();

  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" boxShadow="none" my={8}>
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={image.url}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody color={COLOR_TEXT} px={[0, 10]}>
          <Link href={`${PATH_BLOG}/${slug}`}>
            <Heading size="md">{title}</Heading>
          </Link>
          <Text>
            {authorsCollection.items.map((name, index) => {
              return index >= 1 ? `, ${name.firstNameLastName} ` : `${name.firstNameLastName}`; // add comma after first author
            })}
          </Text>
          <Text> {formatDate(date)}</Text>
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
