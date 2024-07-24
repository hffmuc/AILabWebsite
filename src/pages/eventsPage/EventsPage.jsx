import React, { useEffect, useState } from 'react';
import {
  Box,
  Wrap,
  Table,
  Thead,
  Tbody,
  TableContainer,
  Tr,
  Th,
  Td,
  VStack
} from '@chakra-ui/react';
import { v4 } from 'uuid';
import { BrowserView, MobileView } from 'react-device-detect';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import renderMarkdown from '../../helpers/renderMarkdown';
import { getEventsContent, getEventList } from '../../lib/strapi/pages/events';
import formatDate from '../../helpers/formatDate';
import { COLOR_BACKGROUND_LIGHT, COLOR_TEXT_SECONDARY } from '../../constants/styles';

const EventsPage = () => {
  const [eventsContent, setEventsContent] = useState();
  const [previousEvents, setPreviousEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    getEventsContent().then((res) => setEventsContent(res));
    getEventList().then((res) => {
      setUpcomingEvents(res.filter((el) => new Date(el.attributes.event_start) >= new Date()));
      setPreviousEvents(
        res.filter((el) => new Date(el.attributes.event_start) < new Date()).reverse()
      );
    });
  }, []);

  return (
    <PageWrapper>
      {/* UPCOMING EVENTS */}
      <Title name="Kommende Veranstaltungen" textAlign="left" />
      {upcomingEvents.length > 0 ? (
        <Wrap w="100%" spacing={0}>
          <MobileView>
            <TableContainer w="100%" whiteSpace="normal" display="container" overflowX="auto">
              <Table variant="striped" colorScheme="whiteAlpha">
                <Tbody>
                  {upcomingEvents &&
                    upcomingEvents.map((event) => (
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
                            {event.attributes.location && (
                              <Box>Ort: {event.attributes.location}</Box>
                            )}
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
                  {upcomingEvents &&
                    upcomingEvents.map((event) => (
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
        </Wrap>
      ) : (
        <Box bgColor={COLOR_BACKGROUND_LIGHT} py={4} textAlign="center">
          Derzeit sind keine Veranstaltungen geplant, schaut gerne wann anders nochmal vorbei.{' '}
        </Box>
      )}

      <Box py={8}>{renderMarkdown(eventsContent)}</Box>
      <Box h={[6, 7, 8]} />
      {/* PAST EVENTS */}
      {previousEvents.length > 0 && (
        <>
          <Title name="Vergangene Veranstaltungen" textAlign="left" />

          <Wrap w="100%" spacing={0}>
            <MobileView>
              <TableContainer w="100%" whiteSpace="normal" display="container" overflowX="auto">
                <Table variant="striped" colorScheme="whiteAlpha">
                  <Tbody>
                    {previousEvents.map((event) => (
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
                            {event.attributes.location && (
                              <Box>Ort: {event.attributes.location}</Box>
                            )}
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
                    {previousEvents &&
                      previousEvents.map((event) => (
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
          </Wrap>
        </>
      )}
    </PageWrapper>
  );
};

export default EventsPage;
