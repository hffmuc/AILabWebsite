// import { BLOCKS, INLINES } from '@contentful/rich-text-types';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Text, UnorderedList, Image, OrderedList, ListItem, List } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

// const options = {
//   renderMark: {
//     // [MARKS.BOLD]: (text) => `<custom-bold>${text}<custom-bold>`
//   },
//   renderNode: {
//     // eslint-disable-next-line react/no-unstable-nested-components
//     [BLOCKS.PARAGRAPH]: (node, children) => <Text py={1}>{children}</Text>,
//     // eslint-disable-next-line react/no-unstable-nested-components
//     [BLOCKS.UL_LIST]: (node, children) => (
//       <UnorderedList textAlign="start">{children}</UnorderedList>
//     ),
//     // eslint-disable-next-line react/no-unstable-nested-components
//     [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>
//   }
// };

const renderers = {
  ul: ({ ordered, ...props }) => <UnorderedList ordered={ordered ? 'true' : 'false'} {...props} />,
  ol: ({ node, ...props }) => <OrderedList {...props} />,
  li: ({ node, ...props }) => <ListItem>{props.children}</ListItem>,
  img: ({ src, ...props }) => <Image src={src} {...props} />
};

const renderMarkdown = (markdown) => {
  return <ReactMarkdown components={renderers}>{markdown}</ReactMarkdown>;
};

export default renderMarkdown;
