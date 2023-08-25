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
  TableCaption,
  VStack
} from '@chakra-ui/react';
import { v4 } from 'uuid';
import { BrowserView, MobileView } from 'react-device-detect';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
// import { getEventsInformation } from '../../lib/contentful/pages/events';
import renderRichText from '../../helpers/renderRichText';
import renderMarkdown from '../../helpers/renderMarkdown';
import { getEventsContent, getEventList } from '../../lib/strapi/pages/events';
import ContentWrapper from '../../components/ui/ContentWrapper';
import formatDate from '../../helpers/formatDate';
import { COLOR_TEXT_SECONDARY } from '../../constants/styles';

/* eslint-disable jsx-a11y/iframe-has-title */
const EventsPage = () => {
  const [frameLoaded, setFrameLoaded] = useState(false);
  const [eventsContent, setEventsContent] = useState();
  const [eventsList, setEventsList] = useState();

  const onFrameLoad = () => {
    setFrameLoaded(true);
  };

  useEffect(() => {
    getEventsContent().then((res) => setEventsContent(res));
    getEventList().then((res) => setEventsList(res));
  }, []);

  return (
    <PageWrapper>
      {/* <ContentWrapper> */}
      <Title name="Kommende Veranstaltungen" textAlign="left" />

      <Wrap w="100%" spacing={0}>
        <MobileView>
          <TableContainer w="100%" whiteSpace="normal" display="container" overflowX="auto">
            <Table variant="striped" colorScheme="whiteAlpha">
              <Tbody>
                {eventsList &&
                  eventsList.map((event) => (
                    <Tr key={v4()}>
                      <Td px={3} py={3}>
                        <VStack align="stretch">
                          <Box fontWeight="thin">
                            {formatDate(
                              event.attributes.event_start,
                              event.attributes.event_end,
                              event.attributes.include_day,
                              event.attributes.include_time
                            )}
                          </Box>
                          <Box fontWeight="bold">{event.attributes.title}</Box>
                          {event.attributes.shortDescription && (
                            <Box>{event.attributes.shortDescription}</Box>
                          )}
                          {event.attributes.location && <Box>Ort: {event.attributes.location}</Box>}
                        </VStack>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </MobileView>
        <BrowserView>
          <TableContainer w="100%" whiteSpace="normal">
            <Table variant="striped" colorScheme="whiteAlpha">
              {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
              <Thead>
                <Tr>
                  <Th w="20%" color={COLOR_TEXT_SECONDARY}>
                    Wann
                  </Th>
                  <Th w="60%" color={COLOR_TEXT_SECONDARY}>
                    Event
                  </Th>
                  <Th w="20%" color={COLOR_TEXT_SECONDARY}>
                    Wo
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {eventsList &&
                  eventsList.map((event) => (
                    <Tr key={v4()}>
                      <Td p={3}>
                        {formatDate(
                          event.attributes.event_start,
                          event.attributes.event_end,
                          event.attributes.include_day,
                          event.attributes.include_time
                        )}
                      </Td>
                      <Td>
                        <VStack align="stretch">
                          <Box fontWeight="bold">{event.attributes.title}</Box>
                          <Box fontWeight="light">{event.attributes.shortDescription}</Box>
                        </VStack>
                      </Td>
                      <Td>{event.attributes.location}</Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </BrowserView>

        <Box pt={8}>{renderMarkdown(eventsContent)}</Box>

        {/* </Box> */}
      </Wrap>
      {/* </ContentWrapper> */}
    </PageWrapper>
  );
};

export default EventsPage;
