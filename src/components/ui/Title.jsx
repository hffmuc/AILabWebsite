import { Heading } from '@chakra-ui/react';
import React from 'react';

const Title = ({ name, fontFamily = 'Roboto', textAlign = 'center' }) => {
  return (
    // <Heading
    //   fontFamily={fontFamily}
    //   fontSize={[20, 21, 22]}
    //   fontWeight={400}
    //   textAlign={textAlign}
    //   alignSelf="center"
    //   mb={[4, 6]}
    //   mt={[0, 1, 2]}>
    //   {name}
    // </Heading>
    <Heading mb={6} fontSize={20} fontWeight="light" fontFamily={fontFamily} textAlign={textAlign}>
      {name}
    </Heading>
  );
};

export default Title;
