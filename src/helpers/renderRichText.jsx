import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Text, UnorderedList, ListItem } from '@chakra-ui/react';

const options = {
  renderMark: {
    // [MARKS.BOLD]: (text) => `<custom-bold>${text}<custom-bold>`
  },
  renderNode: {
    // eslint-disable-next-line react/no-unstable-nested-components
    [BLOCKS.PARAGRAPH]: (node, children) => <Text py={1}>{children}</Text>,
    // eslint-disable-next-line react/no-unstable-nested-components
    [BLOCKS.UL_LIST]: (node, children) => (
      <UnorderedList textAlign="start">{children}</UnorderedList>
    ),
    // eslint-disable-next-line react/no-unstable-nested-components
    [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>
  }
};

const renderRichText = (contentJson) => {
  return documentToReactComponents(contentJson, options);
};

export default renderRichText;
