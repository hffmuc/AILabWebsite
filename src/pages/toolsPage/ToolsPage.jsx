import React, { useState, useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  Select,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Tooltip,
  Switch,
} from '@chakra-ui/react';

import { v4 as uuidv4 } from 'uuid';
import Title from '../../components/ui/Title';
import ToolCard from './ToolCard';
import ToolTag from '../../components/ui/ToolTag';
import {
  COLOR_BACKGROUND,
  COLOR_BACKGROUND_HOVER,
  COLOR_BACKGROUND_SOLID,
  COLOR_TEXT_SECONDARY,
} from '../../constants/styles';
import {
  getTags,
  getToolsIntroduction,
  getToolsWithTags,
} from '../../lib/strapi/pages/tools';
import PageWrapper from '../../components/ui/PageWrapper';
import renderMarkdown from '../../helpers/renderMarkdown';
import { useTranslation } from 'react-i18next';

const ToolsPage = () => {
  const [tags, setTags] = useState([]);
  const [tools, setTools] = useState([]);
  const [activeTags, setActiveTags] = useState(new Set());
  const [availableToolsChecked, setAvailableToolsChecked] = useState(false);
  const [sortBy, setSortBy] = useState('Default');
  const [introduction, setIntroduction] = useState('');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getTags().then((res) => {
      setTags(res);
      // console.log(res);
    });
    getToolsWithTags().then((res) => {
      setTools(res);
      // console.log(res);
    });
    getToolsIntroduction().then((res) => {
      setIntroduction(res);
      // console.log(res);
    });
  }, [i18n.language]);

  useEffect(() => {
    getToolsWithTags(activeTags, sortBy, availableToolsChecked).then((res) => {
      setTools(res);
    });
  }, [activeTags, sortBy, availableToolsChecked, i18n.language]);

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
          <Title name={t('tools.title')} textAlign="left" />
        </Box>
        <Box pb={6} mt={3} color={COLOR_TEXT_SECONDARY} w="100%">
          {renderMarkdown(introduction)}
        </Box>

        <Wrap pb={4} w="100%" spacing={4}>
          <WrapItem alignItems="center">
            <Wrap>
              <Box marginRight={2}>{t('tools.filterResults')}</Box>

              {tags.map((tag) => (
                <WrapItem alignItems="center" key={uuidv4()}>
                  <ToolTag
                    tag={tag}
                    key={uuidv4()}
                    isActivated={activeTags.has(tag.name)}
                    onClick={() => toggleTag(tag.name)}
                  />
                </WrapItem>
              ))}
            </Wrap>
          </WrapItem>
          {/* <Spacer /> */}
          <WrapItem alignItems="center">
            <Box marginRight={2}>{t('tools.sortBy')}</Box>
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
              _hover={{ bg: COLOR_BACKGROUND_HOVER }}
            >
              <option
                value="Default"
                style={{
                  backgroundColor: COLOR_BACKGROUND_SOLID,
                  color: 'white',
                }}
              >
                {t('tools.sortOptions.date')}
              </option>
              <option
                value="Name"
                style={{
                  backgroundColor: COLOR_BACKGROUND_SOLID,
                  color: 'white',
                }}
              >
                {t('tools.sortOptions.name')}
              </option>
            </Select>
          </WrapItem>
          <WrapItem alignItems="center">
            <FormControl display="flex" alignItems="center">
              <Switch
                id="availableToolsSwitch"
                mr={2}
                onChange={(val) => setAvailableToolsChecked(val.target.checked)}
                isChecked={availableToolsChecked}
              />
              <FormLabel mb="0" fontWeight="normal">
                <Tooltip label={t('tools.availableToolsTooltip')}>
                  {t('tools.showAvailableTools')}
                </Tooltip>
              </FormLabel>
            </FormControl>
          </WrapItem>
        </Wrap>

        <SimpleGrid
          marginTop="20px"
          spacing="20px"
          columns={[1, 2, 3, 3, 4, 5]}
        >
          {tools?.map((tool) => (
            <ToolCard {...tool} key={uuidv4()} />
          ))}
        </SimpleGrid>
      </VStack>
    </PageWrapper>
  );
};

export default ToolsPage;
