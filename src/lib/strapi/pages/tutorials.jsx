/* eslint-disable import/prefer-default-export */
import { graphql } from '..';

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
      tutorial.attributes.embedLink = tutorial.attributes.embedLink.replace(
        'youtube.com',
        'youtube-nocookie.com'
      );
    });
  });

  return res.data.tutorialPage.data.attributes.tutorial_groups.data;
};
