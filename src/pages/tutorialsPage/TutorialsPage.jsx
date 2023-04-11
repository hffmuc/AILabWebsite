import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { getTutorialCategories, getTutorials } from '../../lib/contentful/pages/tutorials';

const TutorialsPage = () => {
  const [tutorials, setTutorials] = useState([]);
  const [categories, setCategories] = useState([]);
  const [youtubeEmbedHTML, setYoutubeEmbedHTML] = useState({});
  const [tutorialDict, setTutorialDict] = useState({});

  const getYoutubeEmbeddedLink = async (url) => {
    const embeddedHTML = fetch(
      `https://www.youtube.com/oembed?url=${url}&format=json&maxwidth=400&maxheight=260`,
      {
        method: 'GET'
      }
    )
      .then((res) => res.json())
      .then((json) => json.html);

    return <div dangerouslySetInnerHTML={{ __html: embeddedHTML }} />;
  };

  useEffect(() => {
    getTutorialCategories().then((res) => setCategories(res));
    getTutorials().then((res) => setTutorials(res));
  }, []);

  useEffect(() => {
    if (categories !== [] && tutorials !== []) {
      const newTutorialDict = Object.assign(
        {},
        ...categories.map((x) => ({ [x.sys.id]: { name: x.categoryName, tutorials: [] } }))
      );

      tutorials.map((tutorial) => {
        // getYoutubeEmbeddedLink(tutorial.tutorialLink).then((res) => (newTutorial.html = res));

        return newTutorialDict[tutorial.category.sys.id].tutorials.push(tutorial);
      });

      console.log(newTutorialDict);
      setTutorialDict(newTutorialDict);
    }
  }, [categories, tutorials]);

  return (
    <PageWrapper>
      <Title name="Tutorials & Recordings" />
      {Object.values(tutorialDict).map((categoryElement) => {
        return (
          <>
            <h4>{categoryElement.name}</h4>
            {categoryElement.tutorials.map((tutorialElement) => tutorialElement.html)}
          </>
        );
      })}
    </PageWrapper>
  );
};

export default TutorialsPage;
