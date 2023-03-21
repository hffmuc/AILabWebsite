import { Grid, GridItem, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Title from './components/ui/Title';
import ToolCard from './pages/toolsPage/ToolCard';
import ToolsPage from './pages/toolsPage/ToolsPage';
import HomePage from './pages/homePage/HomePage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsPage />} />
        </Routes>
      </Router>
      {/* Footer */}
      <Box h="40px" />
    </>
  );
};

export default App;
