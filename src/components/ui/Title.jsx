import { Heading } from '@chakra-ui/react';
import React from 'react';

const Title = ({ name, fontFamily = 'Roboto Mono' }) => {
  return (
    <Heading
      fontFamily={fontFamily}
      fontSize={[20, 21, 22]}
      textAlign="center"
      alignSelf="center"
      mb={[4, 6]}
      mt={[0, 1, 2]}>
      {name}
    </Heading>
  );
};

export default Title;
