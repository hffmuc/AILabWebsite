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
  Icon,
  Wrap
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { BrowserView, MobileView, TabletView, isMobile } from 'react-device-detect';
import { HamburgerIcon } from '@chakra-ui/icons';
import KiLogo from '../../images/hff_ki_logo.png';
import HffLogo from '../../images/hff_Logo_weiss.png';
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
  PATH_CONTACT,
  PATH_EVENTS,
  PATH_FAQ,
  PATH_FESTIVALS,
  PATH_FILMS,
  PATH_HOME,
  PATH_MEDIAPROJECTS,
  PATH_TOOLS,
  PATH_TUTORIALS
} from '../../constants/pathNames';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w={['87%', '85%', '80%', '75%', '70%', '65%']} m="auto">
      <BrowserView>
        <Flex
          // position="sticky"
          // top="0"
          zIndex={5}
          // backgroundColor={COLOR_BACKGROUND_SOLID}
          m="auto"
          w="100%"
          // h="160px"
          mt="12px"
          // paddingLeft={['18px', '30px', '50px', '70px', '150px', '300px']}
          // paddingRight={['18px', '30px', '50px', '70px', '150px', '300px']}

          // paddingBottom="4px"
          fontSize="xl">
          <Link href={PATH_HOME}>
            <Image
              src={KiLogo}
              // maxHeight="50px"
              // height={['50%', '50%', '50%', '100%']}
              width="120px"
              h="120px"
              minW="120px"
              minH="120px"
              // position="absolute"
              mt={['8px', '8px']}
              // minWidth="70px"
              alignSelf="center"
              // paddingTop="2px"
              // paddingBottom="2px"
            />
          </Link>
          <Spacer />
          <VStack justifyContent="end" justify="end" h="100%">
            <HStack w="100%">
              <Spacer />
              <Link href="https://www.hff-muenchen.de/" height="60px">
                <Image src={HffLogo} height="100%" w="auto" alignSelf="end" pt={['8px', '8px']} />
              </Link>
            </HStack>
            <Spacer />
            <Wrap
              justify="end"
              ml="20px"
              fontSize={['md', 'md', 'md', 'md', 'md', 'lg']}
              // justify="space-between"
              spacing={[3, 4, 4, 5, 6, 8]}
              // fontFamily="Roboto Mono"
              // fontSize={['sm', 'md', 'lg', 'xl']}
              // h="50%"
            >
              <Link
                href={PATH_HOME}
                fontWeight={location.pathname === PATH_HOME ? 'bold' : 'normal'}
                color={location.pathname === PATH_HOME ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                Home
              </Link>
              {/* <Link
                href={PATH_ABOUT}
                fontWeight={location.pathname === PATH_ABOUT ? 'bold' : 'normal'}
                color={location.pathname === PATH_ABOUT ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                Über uns
              </Link> */}
              {/* <Link
                href={PATH_BLOG}
                fontWeight={location.pathname === PATH_BLOG ? 'bold' : 'normal'}
                color={location.pathname === PATH_BLOG ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                Blog
              </Link> */}
              {/* <Link
                href={PATH_EVENTS}
                fontWeight={location.pathname === PATH_EVENTS ? 'bold' : 'normal'}
                color={location.pathname === PATH_EVENTS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                Events
              </Link> */}
              <Link
                href={PATH_TOOLS}
                fontWeight={location.pathname === PATH_TOOLS ? 'bold' : 'normal'}
                color={location.pathname === PATH_TOOLS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                Tools
              </Link>

              <Link
                href={PATH_FESTIVALS}
                fontWeight={location.pathname === PATH_FESTIVALS ? 'bold' : 'normal'}
                color={location.pathname === PATH_FESTIVALS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                Festivals
              </Link>
              <Link
                href={PATH_FILMS}
                fontWeight={location.pathname === PATH_FILMS ? 'bold' : 'normal'}
                color={location.pathname === PATH_FILMS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                Filme
              </Link>
              <Link
                href={PATH_MEDIAPROJECTS}
                fontWeight={location.pathname === PATH_MEDIAPROJECTS ? 'bold' : 'normal'}
                color={
                  location.pathname === PATH_MEDIAPROJECTS ? COLOR_SECONDARY_HOVER : COLOR_TEXT
                }>
                Medienprojekte
              </Link>
              {/* <Link
                href={PATH_TUTORIALS}
                fontWeight={location.pathname === PATH_TUTORIALS ? 'bold' : 'normal'}
                color={location.pathname === PATH_TUTORIALS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                Tutorials
              </Link> */}
              <Link
                href={PATH_FAQ}
                fontWeight={location.pathname === PATH_FAQ ? 'bold' : 'normal'}
                color={location.pathname === PATH_FAQ ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                FAQ
              </Link>
              <Link
                href={PATH_CONTACT}
                fontWeight={location.pathname === PATH_CONTACT ? 'bold' : 'normal'}
                color={location.pathname === PATH_CONTACT ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                Kontakt
              </Link>
            </Wrap>
          </VStack>
        </Flex>
      </BrowserView>
      <MobileView>
        <HStack
          // position="sticky"
          // top="0"
          zIndex={5}
          // backgroundColor={COLOR_BACKGROUND_SOLID}
          m="auto"
          w="100%"
          h="40px"
          gap={2}
          mt="16px"
          // paddingLeft={['18px', '30px', '50px', '70px', '150px', '300px']}
          // paddingRight={['18px', '30px', '50px', '70px', '150px', '300px']}

          // paddingBottom="4px"
          fontSize="xl">
          <Link href={PATH_HOME} width="auto" h="100%">
            <Image
              src={KiLogo}
              // maxHeight="50px"
              // height={['50%', '50%', '50%', '100%']}
              width="auto"
              h="100%"
              // position="absolute"
              // pt="3px"
              // minWidth="70px"
              alignSelf="center"
              // paddingTop="2px"
              // paddingBottom="2px"
            />
          </Link>

          <Link href="https://www.hff-muenchen.de/" width="auto" h="100%">
            <Image src={HffLogo} height="100%" w="auto" />
          </Link>

          <Spacer />
          <Box h="100%">
            <Button colorScheme="outline" onClick={onOpen} p="0" h="100%">
              <HamburgerIcon h="70%" maxH="50px" w="auto" m="auto" />
            </Button>
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent backgroundColor={COLOR_BACKGROUND_SOLID}>
                <DrawerHeader
                  borderBottomWidth="1px"
                  paddingTop={3}
                  paddingBottom={3}
                  fontWeight="light"
                  fontFamily="Roboto">
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
                    {/* <Link
                      href={PATH_ABOUT}
                      fontWeight={location.pathname === PATH_ABOUT ? 'bold' : 'normal'}
                      color={location.pathname === PATH_ABOUT ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                      Über uns
                    </Link> */}
                    {/* <Link
                      href={PATH_BLOG}
                      fontWeight={location.pathname === PATH_BLOG ? 'bold' : 'normal'}
                      color={location.pathname === PATH_BLOG ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                      Blog
                    </Link> */}
                    {/* <Link
                      href={PATH_EVENTS}
                      fontWeight={location.pathname === PATH_EVENTS ? 'bold' : 'normal'}
                      color={
                        location.pathname === PATH_EVENTS ? COLOR_SECONDARY_HOVER : COLOR_TEXT
                      }>
                      Events
                    </Link> */}
                    <Link
                      href={PATH_TOOLS}
                      fontWeight={location.pathname === PATH_TOOLS ? 'bold' : 'normal'}
                      color={location.pathname === PATH_TOOLS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                      Tools
                    </Link>
                    <Link
                      href={PATH_FESTIVALS}
                      fontWeight={location.pathname === PATH_FESTIVALS ? 'bold' : 'normal'}
                      color={
                        location.pathname === PATH_FESTIVALS ? COLOR_SECONDARY_HOVER : COLOR_TEXT
                      }>
                      Festivals
                    </Link>
                    <Link
                      href={PATH_FILMS}
                      fontWeight={location.pathname === PATH_FILMS ? 'bold' : 'normal'}
                      color={location.pathname === PATH_FILMS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                      Filme
                    </Link>
                    <Link
                      href={PATH_MEDIAPROJECTS}
                      fontWeight={location.pathname === PATH_MEDIAPROJECTS ? 'bold' : 'normal'}
                      color={
                        location.pathname === PATH_MEDIAPROJECTS
                          ? COLOR_SECONDARY_HOVER
                          : COLOR_TEXT
                      }>
                      Medienprojekte
                    </Link>
                    {/* <Link
                      href={PATH_TUTORIALS}
                      fontWeight={location.pathname === PATH_TUTORIALS ? 'bold' : 'normal'}
                      color={
                        location.pathname === PATH_TUTORIALS ? COLOR_SECONDARY_HOVER : COLOR_TEXT
                      }>
                      Tutorials
                    </Link> */}
                    <Link
                      href={PATH_FAQ}
                      fontWeight={location.pathname === PATH_FAQ ? 'bold' : 'normal'}
                      color={location.pathname === PATH_FAQ ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                      FAQ
                    </Link>
                    <Link
                      href={PATH_CONTACT}
                      fontWeight={location.pathname === PATH_CONTACT ? 'bold' : 'normal'}
                      color={
                        location.pathname === PATH_CONTACT ? COLOR_SECONDARY_HOVER : COLOR_TEXT
                      }>
                      Kontakt
                    </Link>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </HStack>
      </MobileView>
      <Box
        // px={['25px', '30px', '50px', '70px', '150px', '300px']}
        m="auto"
        w="100%"
        paddingTop="60px"
        paddingBottom="20px">
        {children}
      </Box>
    </Box>
  );
};

export default PageWrapper;
