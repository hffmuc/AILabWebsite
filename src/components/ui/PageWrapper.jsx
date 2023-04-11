import React from 'react';
import { Box, HStack, Link, Flex, Spacer, Image, Center } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import hffLogo from '../../images/Logo.png';
import {
  COLOR_BACKGROUND,
  COLOR_BACKGROUND_SOLID,
  COLOR_SECONDARY_HOVER,
  COLOR_PRIMARY,
  COLOR_PRIMARY_HOVER,
  COLOR_TEXT
} from '../../constants/styles';
import { PATH_ABOUT, PATH_HOME, PATH_TOOLS, PATH_TUTORIALS } from '../../constants/pathNames';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);

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
              maxHeight="25px"
              alignSelf="center"
              paddingTop="2px"
              paddingBottom="2px"
            />
          </Link>
        </Center>

        <Spacer />
        <HStack justifyContent="end" spacing={5}>
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
            About
          </Link>
          <Link
            href={PATH_TOOLS}
            fontWeight={location.pathname === PATH_TOOLS ? 'bold' : 'normal'}
            color={location.pathname === PATH_TOOLS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
            AI Tools
          </Link>
          <Link
            href={PATH_TUTORIALS}
            fontWeight={location.pathname === PATH_TUTORIALS ? 'bold' : 'normal'}
            color={location.pathname === PATH_TUTORIALS ? COLOR_SECONDARY_HOVER : COLOR_TEXT}>
            Tutorials
          </Link>
        </HStack>
      </Flex>
      <Box
        paddingLeft={['18px', '30px', '50px', '70px', '100px']}
        paddingRight={['18px', '30px', '50px', '70px', '100px']}
        paddingTop="20px"
        paddingBottom="20px">
        {children}
      </Box>
    </>
  );
};

export default PageWrapper;
