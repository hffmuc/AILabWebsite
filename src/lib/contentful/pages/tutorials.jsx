import { graphql } from '..';

export const getTutorials = async () => {
  const query = `
  {tutorialCollection 
    {items
        {tutorialName date tutorialLink category {sys {id }}}
    }
}
    `;

  const res = await graphql(query);

  return res.data.tutorialCollection.items;
};

export const getTutorialCategories = async () => {
  const query = `
    {tutorialCategoriesCollection {items {sys{id} categoryName}}}
      `;

  const res = await graphql(query);

  return res.data.tutorialCategoriesCollection.items;
};
