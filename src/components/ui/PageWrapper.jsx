import React, { useEffect } from 'react';
import {
  Box,
  HStack,
  Link,
  Flex,
  Spacer,
  IconButton,
  Image,
  Center,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  Tooltip,
  Text,
  VStack,
  Icon,
  Wrap,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import {
  BrowserView,
  MobileView,
  TabletView,
  isMobile,
} from 'react-device-detect';
import { HamburgerIcon } from '@chakra-ui/icons';
import KiLogo from '../../images/hff_ki_logo.png';
import HffLogo from '../../images/hff_Logo_weiss.png';
import {
  COLOR_BACKGROUND,
  COLOR_BACKGROUND_SOLID,
  COLOR_SECONDARY_HOVER,
  COLOR_PRIMARY,
  COLOR_PRIMARY_HOVER,
  COLOR_TEXT,
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
  PATH_TUTORIALS,
} from '../../constants/pathNames';
import { useTranslation } from 'react-i18next';

import { FiChevronDown, FiGlobe } from 'react-icons/fi';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation();

  return (
    <>
      <Flex w="100%" justify="end" paddingY={4} paddingX={4}>
        <Menu>
          <MenuButton
            cursor="pointer"
            _focus={{ outline: 'none' }}
            aria-label="Change language"
          >
            <HStack spacing={1} align="center">
              <Icon as={FiGlobe} h="100%" />
              <Box fontSize="sm" fontWeight="medium" lineHeight="1">
                {i18n.language === 'de' ? 'German' : 'English'}
              </Box>
              <Icon as={FiChevronDown} h="100%" />
            </HStack>
          </MenuButton>
          <MenuList bg={COLOR_BACKGROUND_SOLID}>
            <MenuItem onClick={() => i18n.changeLanguage('en')} bg="none">
              English
            </MenuItem>
            <MenuItem onClick={() => i18n.changeLanguage('de')} bg="none">
              German
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Box w={['87%', '85%', '80%', '75%', '70%', '65%']} m="auto">
        <BrowserView>
          {/* <button onClick={() => i18n.changeLanguage('de')}>DE</button>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button> */}

          <Flex zIndex={5} m="auto" w="100%" mt="12px" fontSize="xl">
            <Link href={PATH_HOME}>
              <Image
                src={KiLogo}
                width="120px"
                h="120px"
                minW="120px"
                minH="120px"
                mt={['8px', '8px']}
                alignSelf="center"
              />
            </Link>
            <Spacer />
            <VStack justifyContent="end" justify="end" h="100%">
              <HStack w="100%">
                <Spacer />
                <Link href="https://www.hff-muenchen.de/" height="60px">
                  <Image
                    src={HffLogo}
                    height="100%"
                    w="auto"
                    alignSelf="end"
                    pt={['8px', '8px']}
                  />
                </Link>
              </HStack>
              <Spacer />
              <Wrap
                justify="end"
                ml="20px"
                fontSize={['md', 'md', 'md', 'md', 'md', 'lg']}
                spacing={[3, 4, 4, 5, 6, 8]}
              >
                <Link
                  href={PATH_HOME}
                  fontWeight={
                    location.pathname === PATH_HOME ? 'bold' : 'normal'
                  }
                  color={
                    location.pathname === PATH_HOME
                      ? COLOR_SECONDARY_HOVER
                      : COLOR_TEXT
                  }
                >
                  {t('navigation.home')}
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
                  fontWeight={
                    location.pathname === PATH_TOOLS ? 'bold' : 'normal'
                  }
                  color={
                    location.pathname === PATH_TOOLS
                      ? COLOR_SECONDARY_HOVER
                      : COLOR_TEXT
                  }
                >
                  {t('navigation.tools')}
                </Link>

                <Link
                  href={PATH_FESTIVALS}
                  fontWeight={
                    location.pathname === PATH_FESTIVALS ? 'bold' : 'normal'
                  }
                  color={
                    location.pathname === PATH_FESTIVALS
                      ? COLOR_SECONDARY_HOVER
                      : COLOR_TEXT
                  }
                >
                  {t('navigation.festivals')}
                </Link>
                <Link
                  href={PATH_FILMS}
                  fontWeight={
                    location.pathname === PATH_FILMS ? 'bold' : 'normal'
                  }
                  color={
                    location.pathname === PATH_FILMS
                      ? COLOR_SECONDARY_HOVER
                      : COLOR_TEXT
                  }
                >
                  {t('navigation.films')}
                </Link>
                <Link
                  href={PATH_MEDIAPROJECTS}
                  fontWeight={
                    location.pathname === PATH_MEDIAPROJECTS ? 'bold' : 'normal'
                  }
                  color={
                    location.pathname === PATH_MEDIAPROJECTS
                      ? COLOR_SECONDARY_HOVER
                      : COLOR_TEXT
                  }
                >
                  {t('navigation.mediaprojects')}
                </Link>
                {/* <Link
                href={PATH_TUTORIALS}
                fontWeight={location.pathname === PATH_TUTORIALS ? 'bold' : 'normal'}
                color={location.pathname === PATH_TUTORIALS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
                Tutorials
              </Link> */}
                <Link
                  href={PATH_FAQ}
                  fontWeight={
                    location.pathname === PATH_FAQ ? 'bold' : 'normal'
                  }
                  color={
                    location.pathname === PATH_FAQ
                      ? COLOR_SECONDARY_HOVER
                      : COLOR_TEXT
                  }
                >
                  {t('navigation.faq')}
                </Link>
                <Link
                  href={PATH_CONTACT}
                  fontWeight={
                    location.pathname === PATH_CONTACT ? 'bold' : 'normal'
                  }
                  color={
                    location.pathname === PATH_CONTACT
                      ? COLOR_SECONDARY_HOVER
                      : COLOR_TEXT
                  }
                >
                  {t('navigation.contact')}
                </Link>
              </Wrap>
            </VStack>
          </Flex>
        </BrowserView>
        <MobileView>
          <HStack
            zIndex={5}
            m="auto"
            w="100%"
            h="40px"
            gap={2}
            mt="16px"
            fontSize="xl"
          >
            <Link href={PATH_HOME} width="auto" h="100%">
              <Image src={KiLogo} width="auto" h="100%" alignSelf="center" />
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
                    fontFamily="Roboto"
                  >
                    Navigation
                  </DrawerHeader>
                  <DrawerBody>
                    <VStack alignItems="start" spacing={3} fontSize="xl" mt={2}>
                      <Link
                        href={PATH_HOME}
                        fontWeight={
                          location.pathname === PATH_HOME ? 'bold' : 'normal'
                        }
                        color={
                          location.pathname === PATH_HOME
                            ? COLOR_SECONDARY_HOVER
                            : COLOR_TEXT
                        }
                      >
                        {t('navigation.home')}
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
                        fontWeight={
                          location.pathname === PATH_TOOLS ? 'bold' : 'normal'
                        }
                        color={
                          location.pathname === PATH_TOOLS
                            ? COLOR_SECONDARY_HOVER
                            : COLOR_TEXT
                        }
                      >
                        {t('navigation.tools')}
                      </Link>
                      <Link
                        href={PATH_FESTIVALS}
                        fontWeight={
                          location.pathname === PATH_FESTIVALS
                            ? 'bold'
                            : 'normal'
                        }
                        color={
                          location.pathname === PATH_FESTIVALS
                            ? COLOR_SECONDARY_HOVER
                            : COLOR_TEXT
                        }
                      >
                        {t('navigation.festivals')}
                      </Link>
                      <Link
                        href={PATH_FILMS}
                        fontWeight={
                          location.pathname === PATH_FILMS ? 'bold' : 'normal'
                        }
                        color={
                          location.pathname === PATH_FILMS
                            ? COLOR_SECONDARY_HOVER
                            : COLOR_TEXT
                        }
                      >
                        {t('navigation.films')}
                      </Link>
                      <Link
                        href={PATH_MEDIAPROJECTS}
                        fontWeight={
                          location.pathname === PATH_MEDIAPROJECTS
                            ? 'bold'
                            : 'normal'
                        }
                        color={
                          location.pathname === PATH_MEDIAPROJECTS
                            ? COLOR_SECONDARY_HOVER
                            : COLOR_TEXT
                        }
                      >
                        {t('navigation.mediaprojects')}
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
                        fontWeight={
                          location.pathname === PATH_FAQ ? 'bold' : 'normal'
                        }
                        color={
                          location.pathname === PATH_FAQ
                            ? COLOR_SECONDARY_HOVER
                            : COLOR_TEXT
                        }
                      >
                        {t('navigation.faq')}
                      </Link>
                      <Link
                        href={PATH_CONTACT}
                        fontWeight={
                          location.pathname === PATH_CONTACT ? 'bold' : 'normal'
                        }
                        color={
                          location.pathname === PATH_CONTACT
                            ? COLOR_SECONDARY_HOVER
                            : COLOR_TEXT
                        }
                      >
                        {t('navigation.contact')}
                      </Link>
                    </VStack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          </HStack>
        </MobileView>
        <Box m="auto" w="100%" paddingTop="60px" paddingBottom="20px">
          {children}
        </Box>
      </Box>{' '}
    </>
  );
};

export default PageWrapper;
