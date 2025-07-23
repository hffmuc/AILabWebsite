import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';
import {
  COLOR_BACKGROUND,
  COLOR_BACKGROUND_HOVER,
} from '../../constants/styles';

const ToolTag = ({ tag, isActivated, onClick }) => {
  return (
    <Tag
      variant="solid"
      size="sm"
      _hover={{
        backgroundColor: isActivated === false ? tag.color : '',
        color: isActivated === false ? '#27354a' : '',
      }}
      border={isActivated || isActivated === undefined ? 'none' : '1px'}
      backgroundColor={
        isActivated || isActivated === undefined ? tag.color : 'transparent'
      }
      color={isActivated || isActivated === undefined ? '#27354a' : tag.color}
      cursor={isActivated !== undefined ? 'pointer' : 'default'}
      onClick={onClick || undefined}
    >
      <TagLabel>{tag.name}</TagLabel>
      {isActivated ? <TagCloseButton /> : []}
    </Tag>
  );
};

export default ToolTag;
