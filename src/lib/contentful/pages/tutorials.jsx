import { graphql } from '..';

// eslint-disable-next-line import/prefer-default-export
export const getTutorials = async () => {
  const query = `
  query {
    tutorialPage(id: "1ZeerSsIKLyrZNmmAUy4pt") {tutorialCategoriesCollection {items{name tutorialsCollection{items{tutorialName date tutorialLink}}}}}
  }
    `;

  const res = await graphql(query);

  // swap youtube.com links for www.youtube-nocookie.com links
  res.data.tutorialPage.tutorialCategoriesCollection.items.forEach((category) => {
    category.tutorialsCollection.items.forEach((tutorial) => {
      // eslint-disable-next-line no-param-reassign
      tutorial.tutorialLink = tutorial.tutorialLink.replace('youtube.com', 'youtube-nocookie.com');
    });
  });

  return res.data.tutorialPage.tutorialCategoriesCollection.items;
};

// export const getTutorialCategories = async () => {
//   const query = `
//     {tutorialCategoriesCollection {items {sys{id} categoryName}}}
//       `;

//   const res = await graphql(query);

//   return res.data.tutorialCategoriesCollection.items;
// };
