import React, { useEffect, useState } from 'react';
import {
  Box,
  Spinner,
  Spacer,
  Flex,
  Wrap,
  WrapItem,
  Center,
  AspectRatio,
  Heading,
  List,
  Text,
  Table,
  Thead,
  Tbody,
  TableContainer,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
// import { getEventsInformation } from '../../lib/contentful/pages/events';
import renderRichText from '../../helpers/renderRichText';
import renderMarkdown from '../../helpers/renderMarkdown';
import { getEventsContent } from '../../lib/strapi/pages/events';

/* eslint-disable jsx-a11y/iframe-has-title */
const EventsPage = () => {
  const [frameLoaded, setFrameLoaded] = useState(false);
  const [eventsContent, setEventsContent] = useState();

  const onFrameLoad = () => {
    setFrameLoaded(true);
  };

  useEffect(() => {
    getEventsContent().then((res) => setEventsContent(res));
  }, []);

  return (
    <PageWrapper>
      <Title name="Kommende Veranstaltungen" />

      <Wrap w="100%" spacing={0}>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        {/* <Box pb={4} w={['100%', '100%', '100%', '55%']}> */}
        {/* <AspectRatio w="100%" h="100%">
            <>
              {!frameLoaded ? (
                <Center>
                  <Spinner />
                </Center>
              ) : (
                []
              )}
              <iframe
                src="https://cloud.hff-muc.de/nextcloud/index.php/apps/calendar/embed/aYz8ajE7dN3aJt2p?width=800&height=600"
                // style="border-width:0"
                width="800"
                height="600"
                hidden={!frameLoaded}
                frameBorder="0"
                scrolling="no"
                onLoad={() => onFrameLoad()}
              />
            </>
          </AspectRatio> */}
        {/* </Box> */}
        {/* <Spacer /> */}
        {/* <Box h="100%" w="100%"> */}
        <Box>{renderMarkdown(eventsContent)}</Box>

        {/* </Box> */}
      </Wrap>
    </PageWrapper>
  );
};

export default EventsPage;
