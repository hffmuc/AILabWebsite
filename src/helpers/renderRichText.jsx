import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Text, UnorderedList, ListItem } from '@chakra-ui/react';

const options = {
  renderMark: {
    // [MARKS.BOLD]: (text) => `<custom-bold>${text}<custom-bold>`
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text py={1}>{children}</Text>,
    [BLOCKS.UL_LIST]: (node, children) => (
      <UnorderedList textAlign="start">{children}</UnorderedList>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
  },
};

const renderRichText = (contentJson) => {
  return documentToReactComponents(contentJson, options);
};

export default renderRichText;
