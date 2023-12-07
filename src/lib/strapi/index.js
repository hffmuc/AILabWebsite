// eslint-disable-next-line import/prefer-default-export
export const graphql = async (query) => {
  const r = await fetch('/graphql', {
    method: 'POST',
    headers: process.env.REACT_APP_STRAPI_API_TOKEN
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_STRAPI_API_TOKEN}`
        }
      : {
          'Content-Type': 'application/json'
        },
    body: JSON.stringify({ query })
  });

  if (r.ok) {
    return r.json();
  }

  throw new Error(r.json().errors[0].message);
};
