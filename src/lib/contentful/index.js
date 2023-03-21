import { ENDPOINT } from '../../constants/apis';

const graphql = async (query) => {
  const r = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
    },
    body: JSON.stringify({ query })
  });

  if (r.ok) {
    return r.json();
  }

  throw new Error(r.json().errors[0].message);
};

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

/** {
       aiToolCollection {
         items {
           	toolName
           	linkWebTool
           	linkGithub
            tagsCollection {
              items {
                tagName
              }
            }
          	windowsApplication {name directory}
          	macApplication {name directory}
         } 
       }
   
  
   tagsCollection {items {tagName}}} 
   */
