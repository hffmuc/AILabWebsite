/* eslint-disable react/button-has-type */
// Carousel.tsx
import { Box, Button } from '@chakra-ui/react';
import { useSnapCarousel } from 'react-snap-carousel';
import { v4 } from 'uuid';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { COLOR_BACKGROUND } from '../../constants/styles';

const styles = {
  root: {
    backgroundColor: COLOR_BACKGROUND
  },
  scroll: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    scrollSnapType: 'x mandatory'
  },
  item: {
    width: '100%',
    maxWidth: '380px',
    flexShrink: 0
  },
  itemSnapPoint: {
    scrollSnapAlign: 'start'
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextPrevButton: {},
  nextPrevButtonDisabled: { opacity: 0.3 },
  pagination: {
    display: 'flex'
  },
  paginationButton: {
    margin: '10px 5px',
    height: '15px',
    aspectRatio: '1 / 1',
    backgroundColor: '#bbb',
    borderRadius: '50%',
    display: 'inline-block'
  },
  paginationButtonActive: { opacity: 0.3 },
  pageIndicator: {
    display: 'flex',
    justifyContent: 'center'
  }
};

export const AdvancedCarousel = ({ items, renderItem }) => {
  const { scrollRef, pages, activePageIndex, prev, next, goTo, snapPointIndexes } =
    useSnapCarousel();
  return (
    <div style={styles.root}>
      <Box style={styles.scroll} ref={scrollRef}>
        {items?.map((item, i) =>
          renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i)
          })
        )}
      </Box>
      <Box style={styles.controls} aria-hidden my={2}>
        <button
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex <= 0 ? styles.nextPrevButtonDisabled : {})
          }}
          onClick={() => prev()}>
          <ArrowBackIcon h="100%" />
        </button>
        {pages.map((_, i) => (
          <button
            key={v4()}
            style={{
              ...styles.paginationButton,
              ...(activePageIndex === i ? styles.paginationButtonActive : {})
            }}
            onClick={() => goTo(i)}>
            {/* {i + 1} */}
          </button>
        ))}
        <button
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex === pages.length - 1 ? styles.nextPrevButtonDisabled : {})
          }}
          onClick={() => next()}>
          <ArrowForwardIcon />
        </button>
      </Box>
      {/* <div style={styles.pageIndicator}>
        {activePageIndex + 1} / {pages.length}
      </div> */}
    </div>
  );
};

export const CarouselItem = ({ isSnapPoint, children }) => (
  <Box
    style={{
      ...styles.item,
      ...(isSnapPoint ? styles.itemSnapPoint : {})
    }}>
    {children}
  </Box>
);
