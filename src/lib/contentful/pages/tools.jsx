import React from 'react';
import { graphql } from '..';

// eslint-disable-next-line import/prefer-default-export
export const getTags = async () => {
  const query = `
    {
        tagsCollection {items {name color}}
    }
    `;

  const res = await graphql(query);

  return res.data.tagsCollection.items;
};

export const getToolCollection = async () => {
  const query = `
      {
        aiToolCollection {
          items {
            toolName
            toolImage {url}
            description { json }
            linkWebTool
              developers
            linkGithub
            internalInfo {json}
            tagsCollection {
              items {
                name
                color
              }
            }
            windowsApplication {name directory}
            macApplication {name directory}
          } 
        }
      }
      `;

  const res = await graphql(query);

  return res.data.aiToolCollection.items;
};
