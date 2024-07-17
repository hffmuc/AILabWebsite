/* eslint-disable import/prefer-default-export */
import { graphql } from '..';
import replaceYoutubeNoCookie from '../../../helpers/replaceYoutubeNoCookie';

export const getTutorials = async () => {
  const query = `
        query {
            tutorialPage {
            data {
                attributes {
                tutorial_groups {
                    data {
                    attributes {
                        name
                        tutorials {
                        data {
                            attributes {
                            title
                            date
                            embedLink
                            }
                        }
                        }
                    }
                    }
                }
                }
            }
            }
        }
        `;

  const res = await graphql(query);

  res.data.tutorialPage.data.attributes.tutorial_groups.data.forEach((category) => {
    category.attributes.tutorials.data.forEach((tutorial) => {
      // eslint-disable-next-line no-param-reassign
      tutorial.attributes.embedLink = replaceYoutubeNoCookie(tutorial.attributes.embedLink);
    });
  });

  return res.data.tutorialPage.data.attributes.tutorial_groups.data;
};
