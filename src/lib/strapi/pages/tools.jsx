/* eslint-disable import/prefer-default-export */

import { graphql } from '..';

export const getTags = async () => {
  const query = `
  query {
    toolTags{name color}
  }    
      `;

  const res = await graphql(query);

  return res.data.toolTags;
};

// activeTags is a Set of tag names (as strings)
export const getToolsWithTags = async (activeTags, sortBy, availableToolsChecked) => {
  console.log(sortBy);
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
      query {
        aiTools(sort: "${sortParameter}", filters: { 
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

  // const tagsArray = Array.from(activeTags);
  // query = `
  //   query {
  //     aiTools(filters: { toolTags: { name: { in: ${JSON.stringify(
  //       tagsArray
  //     )} } } }, sort: "${sortParameter}", pagination: { limit: 100 }) {
  //       data {
  //         attributes {
  //           toolName
  //           createdAt
  //           toolImage {
  //             data {
  //               attributes {
  //                 formats
  //                 url
  //               }
  //             }
  //           }
  //           developers
  //           description
  //           webToolLink
  //           githubLink
  //           localAppLink
  //           available_at_KI_Lab
  //           softwareLink
  //           googleCollabLink
  //           internalInfo
  //           toolTags {
  //             data {
  //               attributes {
  //                 name
  //                 color
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;

  const res = await graphql(query);

  return res.data.aiTools;
};
