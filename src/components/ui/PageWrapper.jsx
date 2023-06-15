import React from 'react';
import {
  Box,
  HStack,
  Link,
  Flex,
  Spacer,
  Image,
  Center,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  VStack,
  Icon
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { BrowserView, MobileView, TabletView } from 'react-device-detect';
import { HamburgerIcon } from '@chakra-ui/icons';
import hffLogo from '../../images/hff_ki_logo.png';
import {
  COLOR_BACKGROUND,
  COLOR_BACKGROUND_SOLID,
  COLOR_SECONDARY_HOVER,
  COLOR_PRIMARY,
  COLOR_PRIMARY_HOVER,
  COLOR_TEXT
} from '../../constants/styles';
import {
  PATH_ABOUT,
  PATH_BLOG,
  PATH_EVENTS,
  PATH_HOME,
  PATH_TOOLS,
  PATH_TUTORIALS
} from '../../constants/pathNames';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        // position="sticky"
        top="0"
        zIndex={5}
        // backgroundColor={COLOR_BACKGROUND_SOLID}
        paddingLeft={['18px', '30px', '50px', '70px', '100px']}
        paddingRight={['18px', '30px', '50px', '70px', '100px']}
        paddingTop="10px"
        paddingBottom="4px"
        fontSize="xl">
        <Center>
          <Link href={PATH_HOME}>
            <Image
              src={hffLogo}
              maxHeight="50px"
              height="50px"
              width="auto"
              // minWidth="70px"
              alignSelf="center"
              paddingTop="2px"
              paddingBottom="2px"
            />
          </Link>
        </Center>

        <Spacer />
        <BrowserView>
          <HStack justifyContent="end" spacing={8} fontFamily="Roboto Mono">
            <Link
              href={PATH_HOME}
              fontWeight={location.pathname === PATH_HOME ? 'bold' : 'normal'}
              color={location.pathname === PATH_HOME ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
              Home
            </Link>
            <Link
              href={PATH_ABOUT}
              fontWeight={location.pathname === PATH_ABOUT ? 'bold' : 'normal'}
              color={location.pathname === PATH_ABOUT ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
              Über uns
            </Link>
            <Link
              href={PATH_BLOG}
              fontWeight={location.pathname === PATH_BLOG ? 'bold' : 'normal'}
              color={location.pathname === PATH_BLOG ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
              Blog
            </Link>
            <Link
              href={PATH_EVENTS}
              fontWeight={location.pathname === PATH_EVENTS ? 'bold' : 'normal'}
              color={location.pathname === PATH_EVENTS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
              Events
            </Link>
            <Link
              href={PATH_TOOLS}
              fontWeight={location.pathname === PATH_TOOLS ? 'bold' : 'normal'}
              color={location.pathname === PATH_TOOLS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
              KI Tools
            </Link>
            <Link
              href={PATH_TUTORIALS}
              fontWeight={location.pathname === PATH_TUTORIALS ? 'bold' : 'normal'}
              color={location.pathname === PATH_TUTORIALS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
              Tutorials
            </Link>
          </HStack>
        </BrowserView>
        <MobileView>
          <Button colorScheme="outline" onClick={onOpen} p="0">
            <HamburgerIcon h="80%" w="auto" />
          </Button>
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent backgroundColor={COLOR_BACKGROUND_SOLID}>
              <DrawerHeader
                borderBottomWidth="1px"
                paddingTop={3}
                paddingBottom={3}
                fontFamily="Roboto Mono">
                Navigation
              </DrawerHeader>
              <DrawerBody>
                <VStack alignItems="start" spacing={3} fontSize="xl" mt={2}>
                  <Link
                    href={PATH_HOME}
                    fontWeight={location.pathname === PATH_HOME ? 'bold' : 'normal'}
                    color={location.pathname === PATH_HOME ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                    Home
                  </Link>
                  <Link
                    href={PATH_ABOUT}
                    fontWeight={location.pathname === PATH_ABOUT ? 'bold' : 'normal'}
                    color={location.pathname === PATH_ABOUT ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                    Über uns
                  </Link>
                  <Link
                    href={PATH_BLOG}
                    fontWeight={location.pathname === PATH_BLOG ? 'bold' : 'normal'}
                    color={location.pathname === PATH_BLOG ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                    Blog
                  </Link>
                  <Link
                    href={PATH_EVENTS}
                    fontWeight={location.pathname === PATH_EVENTS ? 'bold' : 'normal'}
                    color={location.pathname === PATH_EVENTS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                    Events
                  </Link>
                  <Link
                    href={PATH_TOOLS}
                    fontWeight={location.pathname === PATH_TOOLS ? 'bold' : 'normal'}
                    color={location.pathname === PATH_TOOLS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                    KI Tools
                  </Link>
                  <Link
                    href={PATH_TUTORIALS}
                    fontWeight={location.pathname === PATH_TUTORIALS ? 'bold' : 'normal'}
                    color={
                      location.pathname === PATH_TUTORIALS ? COLOR_SECONDARY_HOVER : COLOR_TEXT
                    }>
                    Tutorials
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </MobileView>
      </Flex>
      <Box
        paddingLeft={['25px', '30px', '50px', '70px', '100px']}
        paddingRight={['25px', '30px', '50px', '70px', '100px']}
        paddingTop="20px"
        paddingBottom="20px">
        {children}
      </Box>
    </>
  );
};

export default PageWrapper;
