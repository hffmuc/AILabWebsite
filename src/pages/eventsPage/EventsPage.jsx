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
  Text
} from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { getEventsInformation } from '../../lib/contentful/pages/events';

/* eslint-disable jsx-a11y/iframe-has-title */
const EventsPage = () => {
  const [frameLoaded, setFrameLoaded] = useState(false);
  const [eventsInformation, setEventsInformation] = useState();

  const options = {
    renderMark: {
      // [MARKS.BOLD]: (text) => `<custom-bold>${text}<custom-bold>`
    },
    renderNode: {
      // eslint-disable-next-line react/no-unstable-nested-components
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      // eslint-disable-next-line react/no-unstable-nested-components
      [BLOCKS.UL_LIST]: (node, children) => <List>{children}</List>
    }
  };

  const onFrameLoad = () => {
    setFrameLoaded(true);
  };

  useEffect(() => {
    getEventsInformation().then((res) => setEventsInformation(res));
  }, []);

  return (
    <PageWrapper>
      <Title name="Upcoming Events" />

      <Wrap w="100%" spacing={0}>
        <Box w="100%">{documentToReactComponents(eventsInformation, options)}</Box>
        {/* <Spacer /> */}
        {/* <Box h="100%" w="100%"> */}

        <AspectRatio maxH={600} maxW={800} w="100%" h="100%">
          <>
            {!frameLoaded ? (
              <Center>
                <Spinner />
              </Center>
            ) : (
              []
            )}
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%237986CB&ctz=Europe%2FBerlin&showPrint=0&showTabs=1&showCalendars=0&showTz=0&showDate=1&showNav=1&showTitle=0&title=%C3%96ffentliche%20Veranstaltungen&src=ZmJjMDBjZmI0YWNiYzZkMzhhMWVmOGEzM2EzYTA5MGFmYTU0ZTM3YzZjNWQzMGVjZjczMThhOTE3NzU1MGFhZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23795548"
              // style="border-width:0"
              width="800"
              height="600"
              hidden={!frameLoaded}
              frameBorder="0"
              scrolling="no"
              onLoad={() => onFrameLoad()}
            />
          </>
        </AspectRatio>

        {/* </Box> */}
      </Wrap>
    </PageWrapper>
  );
};

export default EventsPage;
