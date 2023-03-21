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
  HStack,
  VStack
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import Title from '../../components/ui/Title';
import ToolCard from './ToolCard';
import ToolTag from '../../components/ui/ToolTag';
import hffLogo from '../../images/Logo.png';
import {
  COLOR_BACKGROUND,
  COLOR_BACKGROUND_HOVER,
  COLOR_BACKGROUND_SOLID
} from '../../constants/styles';
import { getTags, getToolCollection } from '../../lib/contentful';

const ToolsPage = () => {
  const [tags, setTags] = useState([]);
  const [tools, setTools] = useState([]);
  const [activeTags, setActiveTags] = useState(new Set());
  const [sortBy, setSortBy] = useState('Default');

  useEffect(() => {
    getTags().then((res) => {
      setTags(res);
      console.log(res);
    });
    getToolCollection().then((res) => {
      setTools(res);
      console.log(res);
    });
  }, []);

  const IsToolActive = (tool) => {
    if (activeTags.size === 0) {
      return true;
    }
    const correspondingTags = tool.tagsCollection.items.filter((el) => activeTags.has(el.name)); // TODO : anpassen an contentful
    if (correspondingTags.length > 0) {
      return true;
    }
    return false;
  };

  const toggleTag = (tagName) => {
    const newActiveTags = new Set(activeTags);
    if (newActiveTags.has(tagName)) {
      newActiveTags.delete(tagName);
    } else {
      newActiveTags.add(tagName);
    }
    setActiveTags(newActiveTags);
  };

  const sortTools = (toolsArray) => {
    switch (sortBy) {
      case 'Default':
        return toolsArray;
      case 'Name':
        return [...toolsArray].sort((a, b) => {
          const x = a.toolName.toLowerCase();
          const y = b.toolName.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
      case 'Tag':
        return [...toolsArray].sort((a, b) => {
          const x = a.tagsCollection.items ? a.tagsCollection.items[0].name?.toLowerCase() : 'zzzz';
          const y = b.tagsCollection.items ? b.tagsCollection.items[0].name?.toLowerCase() : 'zzzz';
          return x < y ? -1 : x > y ? 1 : 0;
        });
      default:
        return toolsArray;
    }
  };

  return (
    <Box
      paddingLeft={['18px', '30px', '50px', '70px', '100px']}
      paddingRight={['18px', '30px', '50px', '70px', '100px']}
      paddingTop="20px"
      paddingBottom="20px">
      <VStack spacing={4}>
        <Grid templateColumns="repeat(6, 1fr)" gap={1} w="100%">
          <GridItem colSpan={1} alignSelf="center">
            <Image src={hffLogo} maxHeight="25px" alignSelf="center" />
          </GridItem>
          <GridItem colSpan={4}>
            <Title name="AI Tools" />
          </GridItem>
          <GridItem colSpan={1} textAlign="end">
            <Tooltip
              hasArrow
              label='This is a collection of ready-to-use AI applications. Some of them are installed locally on this PC and you can start them by clicking on "Start", others are hosted online and are linked accordingly.
              Contact us if you have any questions.'
              bg={COLOR_BACKGROUND_SOLID}
              color="white"
              placement="auto-end">
              <InfoOutlineIcon maxHeight="25px" h="90%" w="auto" />
            </Tooltip>
          </GridItem>
        </Grid>

        <HStack>
          <Text>Filter results:</Text>
          <HStack spacing={2} paddingRight={3}>
            {tags.map((tag) => (
              <ToolTag
                tag={tag}
                key={uuidv4()}
                isActivated={activeTags.has(tag.name)}
                onClick={() => toggleTag(tag.name)}
              />
            ))}
          </HStack>
          <Text paddingLeft={3}>Sort by:</Text>
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
        </HStack>
        <SimpleGrid marginTop="20px" spacing="20px" columns={[1, 2, 3, 4, 5, 6]}>
          {sortTools(tools).map((tool) =>
            IsToolActive(tool) ? <ToolCard {...tool} key={uuidv4()} /> : []
          )}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default ToolsPage;
