export const graphql = async (query) => {
  const r = await fetch('/graphql', {
    method: 'POST',
    headers: import.meta.env.VITE_STRAPI_API_TOKEN
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`
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
