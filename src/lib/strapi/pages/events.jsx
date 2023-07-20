/* eslint-disable import/prefer-default-export */
import { graphql } from '..';
import { STRAPI_ENDPOINT, STRAPI_ENDPOINT_GRAPHQL } from '../../../constants/apis';

export const getEventsContent = async () => {
  const query = `
    query {
        eventsPage {
        data {
            attributes {
            content
            }
        }
        }
    }
    `;

  const res = await graphql(query);

  return res.data.eventsPage.data.attributes.content;
};
