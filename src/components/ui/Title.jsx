import { Heading } from '@chakra-ui/react';
import React from 'react';

const Title = ({ name }) => {
  return (
    <Heading fontFamily="Roboto Mono" fontSize={24} textAlign="center" alignSelf="center" mb={8}>
      {name}
    </Heading>
  );
};

export default Title;
