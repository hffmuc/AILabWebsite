import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Center,
  Divider,
  Box,
  CardFooter,
  Button,
  Link,
  HStack,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { PropTypes } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { CheckCircleIcon } from '@chakra-ui/icons';
import githubIcon from '../../images/github-mark-white.svg';

import {
  COLOR_BACKGROUND,
  COLOR_PRIMARY,
  COLOR_TEXT,
  COLOR_PRIMARY_HOVER,
  COLOR_ALTERNATIVE,
  COLOR_SECONDARY,
  COLOR_ALTERNATIVE_HOVER,
} from '../../constants/styles';
import ToolTag from '../../components/ui/ToolTag';
// import { getStrapiImage } from '../../helpers/getStrapiImage';
import renderMarkdown from '../../helpers/renderMarkdown';
import { useTranslation } from 'react-i18next';

const ToolCard = ({
  toolImage,
  toolName,
  description,
  available_at_KI_Lab,
  webToolLink = '',
  developers = '',
  githubLink = '',
  softwareLink,
  googleCollabLink,
  toolTags,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <Card
      size={['md', 'sm']}
      textColor={COLOR_TEXT}
      background={COLOR_BACKGROUND}
    >
      <CardBody>
        <Image
          src={
            toolImage.formats?.small
              ? toolImage.formats.small.url
              : toolImage.url
          }
          alt={toolName}
          borderRadius="md"
          w={['60%', '70%']}
          m="auto"
        />
        <Stack mt={3} spacing="1">
          <Box fontWeight="bold" fontSize="md">
            {toolName}
          </Box>
          {developers ? (
            <Box fontSize="sm" color={COLOR_SECONDARY}>
              {developers}
            </Box>
          ) : (
            []
          )}
          {toolTags.data ? (
            <HStack pt={1} pb={1}>
              {toolTags.map((tag) => (
                <ToolTag tag={tag} key={uuidv4()} />
              ))}
            </HStack>
          ) : (
            []
          )}

          <Box fontSize="sm" noOfLines={10}>
            {renderMarkdown(description)}
          </Box>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <VStack align="stretch">
          <Wrap w="100%">
            {softwareLink && (
              <WrapItem h="30px">
                <Button
                  variant="solid"
                  backgroundColor="#9446fa"
                  h="100%"
                  p={2}
                  fontSize="sm"
                  _hover={{ bg: '#ae77f7' }}
                >
                  <Link href={softwareLink} target="_blank" rel="noreferrer">
                    Software
                  </Link>
                </Button>
              </WrapItem>
            )}
            {webToolLink && (
              <WrapItem h="30px">
                <Button
                  variant="solid"
                  backgroundColor={COLOR_PRIMARY}
                  color={COLOR_TEXT}
                  h="100%"
                  p={2}
                  fontSize="sm"
                  _hover={{ bg: COLOR_PRIMARY_HOVER }}
                >
                  <Link href={webToolLink} target="_blank" rel="noreferrer">
                    Web Tool
                  </Link>
                </Button>
              </WrapItem>
            )}
            {googleCollabLink && (
              <WrapItem h="30px">
                <Button
                  variant="solid"
                  backgroundColor="#f58b00"
                  h="100%"
                  p={2}
                  fontSize="sm"
                  _hover={{ bg: '#e8982e' }}
                >
                  <Link
                    href={googleCollabLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Collab
                  </Link>
                </Button>
              </WrapItem>
            )}
            {githubLink && (
              <WrapItem h="30px">
                <Link
                  href={githubLink}
                  h="100%"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={githubIcon} h="100%" w="auto" p="3px" />
                </Link>
              </WrapItem>
            )}
          </Wrap>
          {available_at_KI_Lab && (
            <Box verticalAlign="center" fontWeight="500" fontSize="sm">
              <CheckCircleIcon color="white" h="80%" pb="0.1rem" mr="1" />
              {t('tools.available')}
            </Box>
          )}
        </VStack>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
