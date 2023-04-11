import { Grid, GridItem, Box, Flex, Link } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Title from './components/ui/Title';
import ToolCard from './pages/toolsPage/ToolCard';
import ToolsPage from './pages/toolsPage/ToolsPage';
import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
import TutorialsPage from './pages/tutorialsPage/TutorialsPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
        </Routes>
      </Router>
      {/* Footer */}
      <Box h="40px" w="100%" />
      <Box position="absolute" bottom={0} textAlign="center" w="100%" h="40px">
        <Link href="https://www.hff-muc.de/de_DE/imprint">Impressum</Link>
      </Box>
    </>
  );
};

export default App;
