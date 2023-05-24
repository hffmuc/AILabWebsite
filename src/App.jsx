import { Grid, GridItem, Box, Flex, Link } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Title from './components/ui/Title';
import ToolCard from './pages/toolsPage/ToolCard';
import ToolsPage from './pages/toolsPage/ToolsPage';
import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
import TutorialsPage from './pages/tutorialsPage/TutorialsPage';
import EventsPage from './pages/eventsPage/EventsPage';
import BlogOverviewPage from './pages/blog/BlogOverview';
import {
  PATH_ABOUT,
  PATH_BLOG,
  PATH_BLOG_ARTICLE,
  PATH_EVENTS,
  PATH_HOME,
  PATH_TOOLS,
  PATH_TUTORIALS
} from './constants/pathNames';
import BlogArticlePage from './pages/blog/BlogArticlePage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={PATH_HOME} element={<HomePage />} />
          <Route path={PATH_TOOLS} element={<ToolsPage />} />
          <Route path={PATH_ABOUT} element={<AboutPage />} />
          <Route path={PATH_TUTORIALS} element={<TutorialsPage />} />
          <Route path={PATH_EVENTS} element={<EventsPage />} />
          <Route path={PATH_BLOG} element={<BlogOverviewPage />} />
          <Route path={PATH_BLOG_ARTICLE} element={<BlogArticlePage />} />
        </Routes>
      </Router>
      {/* Footer */}
      <Box h="80px" w="100%" />
      <Flex
        position="absolute"
        bottom={0}
        textAlign="center"
        w="100%"
        h="80px"
        justifyContent="center"
        alignItems="center">
        <Link href="https://www.hff-muc.de/de_DE/imprint">Impressum</Link>
      </Flex>
    </>
  );
};

export default App;
