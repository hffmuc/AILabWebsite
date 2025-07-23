import { graphql } from '..';
import replaceYoutubeNoCookie from '../../../helpers/replaceYoutubeNoCookie';

export const getTutorials = async () => {
  const query = `
        query($locale: I18NLocaleCode) {
            tutorialPage (locale: $locale) {
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

  res.data.tutorialPage.data.attributes.tutorial_groups.data.forEach(
    (category) => {
      category.attributes.tutorials.data.forEach((tutorial) => {
        tutorial.attributes.embedLink = replaceYoutubeNoCookie(
          tutorial.attributes.embedLink
        );
      });
    }
  );

  return res.data.tutorialPage.data.attributes.tutorial_groups.data;
};
