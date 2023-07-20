/* eslint-disable import/prefer-default-export */
import { graphql } from '..';

export const getTools = async () => {
  const query = `
  query {
    aiTools {
      data {
        attributes {
          toolName
          toolImage {
            data {
              attributes {
                formats
              }
            }
          }
          developers
          description
          toolTags {
            data {
              attributes {
                name
                color
              }
            }
          }
          webToolLink
          githubLink
          localAppLink
          internalInfo
        }
      }
    }
  }
  
    `;

  const res = await graphql(query);

  return res.data.aiTools.data;
};

export const getTags = async () => {
  const query = `
  query {
    toolTags{data{attributes{name color}}}
  }    
      `;

  const res = await graphql(query);

  return res.data.toolTags.data;
};

export const getToolsWithTags = async (tagsArray, sortBy) => {
  let sortParameter = '';
  switch (sortBy) {
    case 'name':
      sortParameter = 'toolName';
      break;
    case 'tags':
      sortParameter = 'toolTags:name';
      break;
    case 'default':
      sortParameter = '';
      break;
    default:
      sortParameter = '';
      break;
  }

  const query = `
  query {
    aiTools(filters: { toolTags: { name: { in: ${JSON.stringify(
      tagsArray
    )} } } }, sort: "${sortParameter}:asc") {
      data {
        attributes {
          toolName
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
              }
            }
          }
        }
      }
    }
  }
  
    `;

  const res = await graphql(query);

  //   console.log(res.data.aiTools.data);

  return res.data.aiTools.data;
};
