import { Grid, GridItem, Box, Flex, Link } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Title from './components/ui/Title';
import ToolCard from './pages/toolsPage/ToolCard';

import {
  PATH_ABOUT,
  PATH_BLOG,
  PATH_BLOG_ARTICLE,
  PATH_CONTACT,
  PATH_EVENTS,
  PATH_FESTIVALS,
  PATH_FILMS,
  PATH_HOME,
  PATH_MEDIAPROJECTS,
  PATH_TOOLS,
  PATH_TUTORIALS
} from './constants/pathNames';
import PageWrapper from './components/ui/PageWrapper';
import ContactPage from './pages/contactPage/ContactPage';
import FestivalsPage from './pages/festivalsPage/FestivalsPage';
import FilmPage from './pages/filmPage/FilmPage';
import MediaProjectsPage from './pages/mediaprojectsPage/MediaProjectsPage';

const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const ToolsPage = lazy(() => import('./pages/toolsPage/ToolsPage'));
const AboutPage = lazy(() => import('./pages/aboutPage/AboutPage'));
const TutorialsPage = lazy(() => import('./pages/tutorialsPage/TutorialsPage'));
const EventsPage = lazy(() => import('./pages/eventsPage/EventsPage'));
const BlogOverviewPage = lazy(() => import('./pages/blog/BlogOverview'));
const BlogArticlePage = lazy(() => import('./pages/blog/BlogArticlePage'));

const App = () => {
  return (
    <ErrorBoundary
      fallback={
        <div>
          Something went wrong. Go back to <a href={PATH_HOME}>home</a>.
        </div>
      }>
      <Router>
        <Suspense>
          <Routes>
            <Route path={PATH_HOME} element={<HomePage />} />
            <Route path={PATH_TOOLS} element={<ToolsPage />} />
            {/* <Route path={PATH_ABOUT} element={<AboutPage />} /> */}
            <Route path={PATH_TUTORIALS} element={<TutorialsPage />} />
            <Route path={PATH_EVENTS} element={<EventsPage />} />
            <Route path={PATH_BLOG} element={<BlogOverviewPage />} />
            <Route path={PATH_BLOG_ARTICLE} element={<BlogArticlePage />} />
            <Route path={PATH_CONTACT} element={<ContactPage />} />
            <Route path={PATH_FESTIVALS} element={<FestivalsPage />} />
            <Route path={PATH_FILMS} element={<FilmPage />} />
            <Route path={PATH_MEDIAPROJECTS} element={<MediaProjectsPage />} />
          </Routes>
        </Suspense>
      </Router>
      {/* Footer */}
      <Box h="80px" w="100%" />
      <Flex
        position="absolute"
        bottom={0}
        textAlign="center"
        w="100%"
        h="80px"
        fontSize="sm"
        gap={4}
        justifyContent="center"
        alignItems="center">
        <Link href="https://www.hff-muc.de/de_DE/imprint">Impressum</Link>
        <Link href="https://www.hff-muenchen.de/de_DE/datenschutzerklaerung">
          Datenschutzerklärung
        </Link>
      </Flex>
    </ErrorBoundary>
  );
};

export default App;
