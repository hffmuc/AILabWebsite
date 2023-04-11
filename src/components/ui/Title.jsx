import { Heading } from '@chakra-ui/react';
import React from 'react';

const Title = ({ name }) => {
  return (
    <Heading fontFamily="Roboto Mono" fontSize={26} textAlign="center" alignSelf="center">
      {name}
    </Heading>
  );
};

export default Title;
