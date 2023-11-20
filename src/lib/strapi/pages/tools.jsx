/* eslint-disable import/prefer-default-export */
import { graphql } from '..';

export const getTags = async () => {
  const query = `
  query {
    toolTags{data{attributes{name color}}}
  }    
      `;

  const res = await graphql(query);

  return res.data.toolTags.data;
};

// activeTags is a Set of tag names (as strings)
export const getToolsWithTags = async (activeTags, sortBy) => {
  console.log(sortBy);
  let sortParameter = '';
  switch (sortBy) {
    case 'Name':
      sortParameter = 'toolName';
      break;
    case 'Tag':
      sortParameter = 'toolTags';
      break;
    case 'Default':
      sortParameter = 'createdAt';
      break;
    case '':
      sortParameter = 'createdAt';
      break;
    default:
      sortParameter = 'createdAt';
      break;
  }

  let query = '';

  if (activeTags?.size === 0 || activeTags === undefined) {
    // No tags selected means all tools, therefore no filtering
    query = `
      query {
        aiTools(sort: "${sortParameter}:asc", pagination: { limit: 100 }) {
          data {
            attributes {
              toolName
              createdAt
              toolImage {
                data {
                  attributes {
                    formats
                    url
                  }
                }
              }
              developers
              description
              webToolLink
              githubLink
              localAppLink
              internalInfo
              toolTags {
                data {
                  attributes {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `;
  } else {
    const tagsArray = Array.from(activeTags);

    query = `
      query {
        aiTools(filters: { toolTags: { name: { in: ${JSON.stringify(
          tagsArray
        )} } } }, sort: "${sortParameter}:asc", pagination: { limit: 100 }) {
          data {
            attributes {
              toolName
              createdAt
              toolImage {
                data {
                  attributes {
                    formats
                    url
                  }
                }
              }
              developers
              description
              webToolLink
              githubLink
              localAppLink
              internalInfo
              toolTags {
                data {
                  attributes {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `;
  }

  const res = await graphql(query);

  return res.data.aiTools.data;
};
