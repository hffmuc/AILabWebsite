import { graphql } from '..';
import replaceVimeoLinkNoCookie from '../../../helpers/replaceVimeoLink';
import replaceYoutubeNoCookie from '../../../helpers/replaceYoutubeNoCookie';

export const getResearchProjectsList = async () => {
  const query = `
  query ($locale: I18NLocaleCode){
    researchProjects (sort: "year:desc", locale: $locale) {
        name
        authors
        description
        year
        conference
        image {
          url
        }
        paper {
          url
        }
      }
  }    
      `;

  const res = await graphql(query);

  return res.data.researchProjects;
};

export const getResarchProjectsContent = async () => {
  const query = `
query ($locale: I18NLocaleCode) {
  researchProjectsPage (locale: $locale) {
    introduction
  }
}
    `;

  const res = await graphql(query);

  return res.data.researchProjectsPage?.introduction;
};
