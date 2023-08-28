/* eslint-disable import/prefer-default-export */
import { graphql } from '..';

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

export const getEventList = async () => {
  const query = `
  query {
    events(sort: "event_start:asc") {
      data {
        attributes {
          title
          event_start
          event_end
          include_day
          include_time
          shortDescription
          location
        }
      }
    }
  }  
      `;

  const res = await graphql(query);

  return res.data.events.data;
};
