import { Box } from '@chakra-ui/react';
import { COLOR_BACKGROUND } from '../../constants/styles';

const Section = ({ children }) => {
  return (
    <Box borderRadius="1" backgroundColor={COLOR_BACKGROUND} p={4} my={4}>
      {children}
    </Box>
  );
};
export default Section;
