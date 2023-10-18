import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';

const ContactPage = () => {
  return (
    <PageWrapper>
      <Title name="Kontakt" textAlign="left" />
      <Text>Für Fragen, Anregungen oder Projektideen schreibt uns gerne eine E-Mail. </Text>
      <Box>
        <Box fontWeight="bold">Teamassistenz Iris Miller</Box> +49 89 68957 2100
        <Box>
          <a href="mailto:i.miller@hff-muc.de">i.miller@hff-muc.de</a>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default ContactPage;
