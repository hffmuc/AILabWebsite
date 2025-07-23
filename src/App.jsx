import { Grid, GridItem, Box, Flex, Link } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import React from 'react';

import {
  PATH_BLOG,
  PATH_BLOG_ARTICLE,
  PATH_CONTACT,
  PATH_FAQ,
  PATH_FESTIVALS,
  PATH_FILMS,
  PATH_HOME,
  PATH_MEDIAPROJECTS,
  PATH_TOOLS,
} from './constants/pathNames';
import ContactPage from './pages/contactPage/ContactPage';
import FestivalsPage from './pages/festivalsPage/FestivalsPage';
import FilmPage from './pages/filmPage/FilmPage';
import MediaProjectsPage from './pages/mediaprojectsPage/MediaProjectsPage';
import FAQPage from './pages/faqPage/FAQPage';

const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const ToolsPage = lazy(() => import('./pages/toolsPage/ToolsPage'));
const BlogOverviewPage = lazy(() => import('./pages/blog/BlogOverview'));
const BlogArticlePage = lazy(() => import('./pages/blog/BlogArticlePage'));
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return (
    <ErrorBoundary
      fallback={
        <div>
          Something went wrong. Go back to <a href={PATH_HOME}>home</a>.
        </div>
      }
    >
      <Router>
        <Suspense>
          <Routes>
            <Route path={PATH_HOME} element={<HomePage />} />
            <Route path={PATH_TOOLS} element={<ToolsPage />} />
            <Route path={PATH_FAQ} element={<FAQPage />} />
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
        alignItems="center"
      >
        <Link href="https://www.hff-muc.de/de_DE/imprint">
          {t('footer.imprint')}
        </Link>
        <Link href="https://www.hff-muenchen.de/de_DE/datenschutzerklaerung">
          {t('footer.privacyPolicy')}
        </Link>
      </Flex>
    </ErrorBoundary>
  );
};

export default App;
