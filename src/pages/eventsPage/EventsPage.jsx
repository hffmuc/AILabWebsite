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
        <Box pb={4} w={['100%', '100%', '100%', '55%']}>
          <AspectRatio w="100%" h="100%">
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
          </AspectRatio>
        </Box>
        <Spacer />
        {/* <Box h="100%" w="100%"> */}
        <Box w={['100%', '100%', '100%', '42%']}>
          {documentToReactComponents(eventsInformation, options)}
        </Box>

        {/* </Box> */}
      </Wrap>
    </PageWrapper>
  );
};

export default EventsPage;
