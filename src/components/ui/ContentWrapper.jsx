import React from 'react';
import { Box, Center } from '@chakra-ui/react';

const ContentWrapper = ({ children }) => {
  return (
    <Center>
      <Box w={['100%', '90%', '75%', '70%', '60%']}>{children}</Box>
    </Center>
  );
};

export default ContentWrapper;
