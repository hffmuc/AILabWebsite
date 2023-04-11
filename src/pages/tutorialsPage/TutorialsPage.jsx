import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { v4 } from 'uuid';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { getTutorials } from '../../lib/contentful/pages/tutorials';

const TutorialsPage = () => {
  const [tutorials, setTutorials] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tutorialDict, setTutorialDict] = useState({});

  useEffect(() => {
    // getTutorialCategories().then((res) => setCategories(res));
    getTutorials().then((res) => setTutorials(res));
  }, []);

  return (
    <PageWrapper>
      <Title name="Tutorials & Recordings" />
      {Object.values(tutorials).map((category) => {
        return (
          <Box key={v4()}>
            <h4>{category.name}</h4>
            {category.tutorialsCollection.items?.map((tutorialElement) => (
              <Box key={v4()}>
                <h5>{tutorialElement.tutorialName}</h5>
                <iframe
                  width="480"
                  height="270"
                  src={tutorialElement.tutorialLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </Box>
            ))}
            {/* {categoryElement.tutorials.map((tutorialElement) => {
              console.log(tutorialElement.html);
              return tutorialElement.html;
            })} */}
          </Box>
        );
      })}
    </PageWrapper>
  );
};

export default TutorialsPage;
