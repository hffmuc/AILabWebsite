import { graphql } from '..';

export const getAboutContent = async () => {
  const query = `
    query aboutPageEntryQuery {
        aboutPage(id: "h11BgXfbaRhU29sP2zHZk") {
        sys {
            id
        }
        content{json}
        }
    }
    `;

  const res = await graphql(query);

  return res.data.aboutPage.content.json;
};

export const getAboutPhoto = async () => {
  const query = `
      query aboutPageEntryQuery {
          aboutPage(id: "h11BgXfbaRhU29sP2zHZk") {
          sys {
              id
          }
          aiTeamPhoto{url}
          }
      }
      `;

  const res = await graphql(query);

  return res.data.aboutPage.aiTeamPhoto.url;
};

export const getTeamMembers = async () => {
  const query = `
      query aboutPageEntryQuery {
          aboutPage(id: "h11BgXfbaRhU29sP2zHZk") {
          sys {
              id
          }
          teamMembers
          }
      }
      `;

  const res = await graphql(query);

  return res.data.aboutPage.teamMembers;
};
