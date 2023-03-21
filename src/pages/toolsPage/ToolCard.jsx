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

const ToolCard = ({
  toolImage,
  toolName,
  description,
  linkWebTool,
  windowsApplication,
  macApplication,
  readMoreLink,
  developers,
  linkGithub,
  internalInfo,
  tagsCollection
}) => {
  const [localApplicationOS, setLocalApplicationOS] = useState(undefined); // application starts on mac or windows depending on backend response

  useEffect(() => {
    if (process.env.REACT_APP_LOCAL === 'true') {
      fetch('/isMac', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          if (json.isMac && macApplication) {
            setLocalApplicationOS(macApplication);
          } else if (!json.isMac && windowsApplication) {
            setLocalApplicationOS(windowsApplication);
          }
        });
    }
  }, []);

  const initiateStartApplication = async () => {
    fetch('/start-application', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        localApplication: { windows: windowsApplication, mac: macApplication } // TODO: nur windows oder mac mitschicken
      })
    });
  };

  return (
    <Card size={['md', 'sm']} textColor={COLOR_TEXT} background={COLOR_BACKGROUND}>
      <CardBody>
        <Image src={toolImage.url} alt={toolName} borderRadius="lg" w={['60%', '70%']} m="auto" />
        <Stack mt={3} spacing="1">
          <Heading size="sm">{toolName}</Heading>
          {developers ? (
            <Text fontSize="sm" color={COLOR_SECONDARY}>
              by {developers}
            </Text>
          ) : (
            []
          )}
          {tagsCollection.items ? (
            <HStack>
              {tagsCollection.items.map((tag) => (
                <ToolTag tag={tag} key={uuidv4()} />
              ))}
            </HStack>
          ) : (
            []
          )}

          <Box fontSize={['sm', '', '', '', 'xs']} noOfLines={8}>
            {documentToReactComponents(description.json)}
          </Box>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <VStack align="stretch">
          <HStack h="30px">
            {localApplicationOS ? (
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
            )}
            {linkWebTool ? (
              <Button
                variant="solid"
                backgroundColor={COLOR_PRIMARY}
                size="sm"
                _hover={{ bg: COLOR_PRIMARY_HOVER }}>
                <Link href={linkWebTool} target="_blank" rel="noreferrer">
                  Web Tool
                </Link>
              </Button>
            ) : (
              []
            )}
            {linkGithub ? (
              <Link href={linkGithub} h="100%" target="_blank" rel="noreferrer">
                <Image src={githubIcon} h="100%" w="auto" p="3px" />
              </Link>
            ) : (
              []
            )}

            {readMoreLink ? (
              <Link href={readMoreLink} color={COLOR_SECONDARY}>
                Read More
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
  description: PropTypes.object.isRequired,
  linkWebTool: PropTypes.string,
  readMoreLink: PropTypes.string,
  developers: PropTypes.string,
  linkGithub: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  internalInfo: PropTypes.object,
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
  linkWebTool: '',
  readMoreLink: '',
  developers: '',
  linkGithub: '',
  internalInfo: '',
  tagsCollection: undefined
};

export default ToolCard;
