import { graphql } from '..';

export const getEventsContent = async () => {
  const query = `
    query ($locale: I18NLocaleCode) {
        eventsPage (locale: $locale) {
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
  query ($locale: I18NLocaleCode) {
    events(sort: "event_start:asc", locale: $locale) {
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
