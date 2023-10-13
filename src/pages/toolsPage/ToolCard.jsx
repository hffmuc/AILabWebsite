import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Box,
  CardFooter,
  Button,
  Link,
  HStack,
  VStack
} from '@chakra-ui/react';
import { PropTypes } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import githubIcon from '../../images/github-mark-white.svg';

import {
  COLOR_BACKGROUND,
  COLOR_PRIMARY,
  COLOR_TEXT,
  COLOR_PRIMARY_HOVER,
  COLOR_ALTERNATIVE,
  COLOR_SECONDARY,
  COLOR_ALTERNATIVE_HOVER
} from '../../constants/styles';
import ToolTag from '../../components/ui/ToolTag';
// import { getStrapiImage } from '../../helpers/getStrapiImage';
import renderMarkdown from '../../helpers/renderMarkdown';

const ToolCard = ({
  toolImage,
  toolName,
  description,
  webToolLink,
  developers,
  githubLink,
  internalInfo,
  toolTags
}) => {
  const [localApplicationOS, setLocalApplicationOS] = useState(undefined); // application starts on mac or windows depending on backend response

  useEffect(() => {
    if (process.env.REACT_APP_LOCAL === 'true') {
      // fetch('/isMac', {
      //   method: 'GET',
      //   headers: { 'Content-Type': 'application/json' }
      // })
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((json) => {
      //     if (json.isMac && macApplication) {
      //       setLocalApplicationOS(macApplication);
      //     } else if (!json.isMac && windowsApplication) {
      //       setLocalApplicationOS(windowsApplication);
      //     }
      //   });
    }
  }, []);

  return (
    <Card size={['md', 'sm']} textColor={COLOR_TEXT} background={COLOR_BACKGROUND}>
      <CardBody>
        <Image
          src={
            toolImage.data.attributes.formats?.small
              ? toolImage.data.attributes.formats.small.url
              : toolImage.data.attributes.url
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
              {toolTags.data.map((tag) => (
                <ToolTag tag={tag.attributes} key={uuidv4()} />
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
          <HStack h="30px">
            {/* {localApplicationOS ? (
              <Button
                variant="solid"
                backgroundColor={COLOR_ALTERNATIVE}
                size="sm"
                _hover={{ bg: COLOR_ALTERNATIVE_HOVER }}
                onClick={() => {
                  initiateStartApplication();
                }}>
                Start
              </Button>
            ) : (
              []
            )} */}
            {webToolLink ? (
              <Button
                variant="solid"
                backgroundColor={COLOR_PRIMARY}
                size="sm"
                _hover={{ bg: COLOR_PRIMARY_HOVER }}>
                <Link href={webToolLink} target="_blank" rel="noreferrer">
                  Web Tool
                </Link>
              </Button>
            ) : (
              []
            )}
            {githubLink ? (
              <Link href={githubLink} h="100%" target="_blank" rel="noreferrer">
                <Image src={githubIcon} h="100%" w="auto" p="3px" />
              </Link>
            ) : (
              []
            )}
          </HStack>

          {process.env.REACT_APP_LOCAL === 'true' && (
            <Box fontSize="xs">{documentToReactComponents(internalInfo?.json)}</Box>
          )}
        </VStack>
      </CardFooter>
    </Card>
  );
};

ToolCard.propTypes = {
  toolImage: PropTypes.shape({
    url: PropTypes.string
  }).isRequired,
  toolName: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  description: PropTypes.string.isRequired,
  webToolLink: PropTypes.string,
  developers: PropTypes.string,
  githubLink: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  internalInfo: PropTypes.string,
  tagsCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        color: PropTypes.string
      })
    )
  })
};

ToolCard.defaultProps = {
  webToolLink: '',
  developers: '',
  githubLink: '',
  internalInfo: '',
  tagsCollection: undefined
};

export default ToolCard;
