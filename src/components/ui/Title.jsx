import { Heading } from '@chakra-ui/react';
import React from 'react';

const Title = ({ name, fontFamily = 'Roboto Mono', textAlign = 'center' }) => {
  return (
    <Heading
      fontFamily={fontFamily}
      fontSize={[20, 21, 22]}
      textAlign={textAlign}
      alignSelf="center"
      mb={[4, 6]}
      mt={[0, 1, 2]}>
      {name}
    </Heading>
  );
};

export default Title;
