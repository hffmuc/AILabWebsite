import { STRAPI_ENDPOINT_GRAPHQL } from '../../constants/apis';

// eslint-disable-next-line import/prefer-default-export
export const graphql = async (query) => {
  const r = await fetch(STRAPI_ENDPOINT_GRAPHQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_STRAPI_API_TOKEN}`
    },
    body: JSON.stringify({ query })
  });

  if (r.ok) {
    return r.json();
  }

  throw new Error(r.json().errors[0].message);
};
