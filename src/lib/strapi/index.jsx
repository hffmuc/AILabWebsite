import i18n from 'i18next';

export const graphql = async (query, variables) => {
  const queryVariables = { locale: i18n.language, ...variables };

  let r = await fetch('/graphql', {
    method: 'POST',
    headers: import.meta.env.VITE_STRAPI_API_TOKEN
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
        }
      : {
          'Content-Type': 'application/json',
        },
    body: JSON.stringify({ query, variables: queryVariables }),
  });

  if (r.ok) {
    return r.json();
  }

  throw new Error(r.json().errors[0].message);
};
