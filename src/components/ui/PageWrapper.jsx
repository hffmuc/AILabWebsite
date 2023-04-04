import React from 'react';
import { Box, HStack, Link, Flex, Spacer, Image } from '@chakra-ui/react';
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
import { PATH_ABOUT, PATH_HOME, PATH_TOOLS } from '../../constants/pathNames';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <Flex
        // justify="end"
        position="sticky"
        top="0"
        zIndex={5}
        backgroundColor={COLOR_BACKGROUND_SOLID}
        paddingLeft={['18px', '30px', '50px', '70px', '100px']}
        paddingRight={['18px', '30px', '50px', '70px', '100px']}
        paddingTop="7px"
        paddingBottom="7px"
        fontSize="xl">
        <HStack>
          <Image
            src={hffLogo}
            maxHeight="25px"
            alignSelf="center"
            paddingTop="2px"
            paddingBottom="2px"
          />
        </HStack>
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
