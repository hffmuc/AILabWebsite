import { graphql } from '..';

export const getToolsIntroduction = async () => {
  const query = `
    query($locale: I18NLocaleCode) {
      toolsPage (locale: $locale) {
        introduction
        localizations {
          locale
          introduction
        }
      }
    }
`;
  const res = await graphql(query);
  return res.data.toolsPage.introduction;
};

export const getTags = async () => {
  const query = `
  query {
    toolTags(sort: "name:ASC"){name color}
  }    
      `;

  const res = await graphql(query);

  return res.data.toolTags;
};

// activeTags is a Set of tag names (as strings)
export const getToolsWithTags = async (
  activeTags,
  sortBy,
  availableToolsChecked
) => {
  // console.log(sortBy);
  let sortParameter = '';
  switch (sortBy) {
    case 'Name':
      sortParameter = 'toolName:asc';
      break;
    case 'Default':
      sortParameter = 'createdAt:desc';
      break;
    case '':
      sortParameter = 'createdAt:desc';
      break;
    default:
      sortParameter = 'createdAt:desc';
      break;
  }

  let query = '';

  query = `
      query($locale: I18NLocaleCode) {
        aiTools(locale: $locale, sort: "${sortParameter}", filters: { 
          ${availableToolsChecked ? `available_at_KI_Lab: { eq: true } ` : ''}, 
          ${
            activeTags?.size === 0 || activeTags === undefined // No tags selected means all tools, therefore no filtering
              ? ''
              : `toolTags: { name: { in: ${JSON.stringify(Array.from(activeTags))} } }`
          }
    
  }
  , pagination: { limit: 100 }) {
              
              toolName
              createdAt
              toolImage {
                    formats
                    url
              }
              developers
              description
              webToolLink
              githubLink
              localAppLink
              available_at_KI_Lab
              softwareLink
              googleCollabLink
              internalInfo
              toolTags {
                    name
                    color
                  }
            }
      
      }
    `;

  const res = await graphql(query);

  return res.data.aiTools;
};
