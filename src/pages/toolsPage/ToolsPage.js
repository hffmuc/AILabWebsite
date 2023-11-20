import React, { useState, useEffect } from 'react';
import {
  Grid,
  Text,
  Box,
  GridItem,
  Image,
  SimpleGrid,
  Tooltip,
  Select,
  VStack,
  Wrap,
  WrapItem,
  Heading
} from '@chakra-ui/react';

import { v4 as uuidv4 } from 'uuid';
import Title from '../../components/ui/Title';
import ToolCard from './ToolCard';
import ToolTag from '../../components/ui/ToolTag';
import {
  COLOR_BACKGROUND,
  COLOR_BACKGROUND_HOVER,
  COLOR_BACKGROUND_SOLID,
  COLOR_TEXT_SECONDARY
} from '../../constants/styles';
import { getTags, getToolsWithTags } from '../../lib/strapi/pages/tools';
import PageWrapper from '../../components/ui/PageWrapper';

const ToolsPage = () => {
  const [tags, setTags] = useState([]);
  const [tools, setTools] = useState([]);
  const [activeTags, setActiveTags] = useState(new Set());
  const [sortBy, setSortBy] = useState('Default');

  useEffect(() => {
    getTags().then((res) => {
      setTags(res);
      // console.log(res);
    });
    getToolsWithTags().then((res) => {
      setTools(res);
      // console.log(res);
    });
  }, []);

  useEffect(() => {
    getToolsWithTags(activeTags, sortBy).then((res) => {
      setTools(res);
    });
  }, [activeTags, sortBy]);

  // TODO: STRAPI
  // const IsToolActive = (tool) => {
  //   if (activeTags.size === 0) {
  //     return true;
  //   }
  //   const correspondingTags = tool.tagsCollection.items.filter((el) => activeTags.has(el.name)); // TODO : anpassen an contentful
  //   if (correspondingTags.length > 0) {
  //     return true;
  //   }
  //   return false;
  // };

  const toggleTag = (tagName) => {
    const newActiveTags = new Set(activeTags);
    if (newActiveTags.has(tagName)) {
      newActiveTags.delete(tagName);
    } else {
      newActiveTags.add(tagName);
    }
    setActiveTags(newActiveTags);
  };

  // const sortTools = (toolsArray) => {
  //   switch (sortBy) {
  //     case 'Default':
  //       return toolsArray;
  //     case 'Name':
  //       return [...toolsArray].sort((a, b) => {
  //         const x = a.toolName.toLowerCase();
  //         const y = b.toolName.toLowerCase();
  //         return x < y ? -1 : x > y ? 1 : 0;
  //       });
  //     case 'Tag':
  //       return [...toolsArray].sort((a, b) => {
  //         const x = a.tagsCollection.items ? a.tagsCollection.items[0].name?.toLowerCase() : 'zzzz';
  //         const y = b.tagsCollection.items ? b.tagsCollection.items[0].name?.toLowerCase() : 'zzzz';
  //         return x < y ? -1 : x > y ? 1 : 0;
  //       });
  //     default:
  //       return toolsArray;
  //   }
  // };

  return (
    <PageWrapper>
      <VStack spacing={0}>
        <Box w="100%">
          <Title name="KI Tools" textAlign="left" />
        </Box>
        <Box pb={6} mt={3} color={COLOR_TEXT_SECONDARY}>
          Hier findet ihr eine Sammlung an KI Tools für Bild, Video, Ton und Sound. Viele davon sind
          Web-Tools und ihr könnt sie direkt über die verlinkte Webseite ausprobieren, andere
          funktionieren nur lokal und können ggfs. im KI Lab ausprobiert werden.
        </Box>

        <Wrap pb={4} w="100%" spacing={4}>
          <WrapItem alignItems="center">
            <Wrap>
              <Box marginRight={2}>Ergebnisse filtern:</Box>

              {tags.map((tag) => (
                <WrapItem alignItems="center" key={uuidv4()}>
                  <ToolTag
                    tag={tag.attributes}
                    key={uuidv4()}
                    isActivated={activeTags.has(tag.attributes.name)}
                    onClick={() => toggleTag(tag.attributes.name)}
                  />
                </WrapItem>
              ))}
            </Wrap>
          </WrapItem>
          {/* <Spacer /> */}

          <WrapItem alignItems="center">
            <Box marginRight={2}>Sortieren nach:</Box>
            <Select
              bg={COLOR_BACKGROUND}
              color="white"
              variant="filled"
              width="auto"
              size="sm"
              onChange={(event) => {
                setSortBy(event.target.value);
              }}
              cursor="pointer"
              _hover={{ bg: COLOR_BACKGROUND_HOVER }}>
              <option
                value="Default"
                style={{ backgroundColor: COLOR_BACKGROUND_SOLID, color: 'white' }}>
                Default
              </option>
              <option
                value="Name"
                style={{ backgroundColor: COLOR_BACKGROUND_SOLID, color: 'white' }}>
                Name
              </option>
              <option
                value="Tag"
                style={{
                  backgroundColor: COLOR_BACKGROUND_SOLID,
                  color: 'white'
                }}>
                Tag
              </option>
            </Select>
          </WrapItem>
        </Wrap>

        <SimpleGrid marginTop="20px" spacing="20px" columns={[1, 2, 3, 3, 4, 5]}>
          {tools.map((tool) => (
            <ToolCard {...tool.attributes} key={uuidv4()} />
          ))}
        </SimpleGrid>
      </VStack>
    </PageWrapper>
  );
};

export default ToolsPage;
