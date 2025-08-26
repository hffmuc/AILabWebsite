import {
  Text,
  UnorderedList,
  Image,
  OrderedList,
  ListItem,
  List,
  Link,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

const renderers = {
  p: ({ node, ...props }) => <Text py={1} whiteSpace="pre-line" {...props} />,
  ul: ({ ordered, ...props }) => (
    <UnorderedList ordered={ordered ? 'true' : 'false'} {...props} />
  ),
  ol: ({ node, ...props }) => <OrderedList {...props} />,
  li: ({ node, ...props }) => <ListItem>{props.children}</ListItem>,
  img: ({ src, ...props }) => <Image src={src} {...props} />,
  a: ({ href, ...props }) => (
    <Link href={href} {...props} textDecoration="underline" />
  ),
};

const renderMarkdown = (markdown) => {
  return (
    <ReactMarkdown components={renderers} breaks>
      {markdown}
    </ReactMarkdown>
  );
};

export default renderMarkdown;
