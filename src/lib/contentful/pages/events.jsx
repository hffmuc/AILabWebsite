/* eslint-disable import/prefer-default-export */
import { graphql } from '..';

export const getEventsInformation = async () => {
  const query = `query {
  
    eventPage(id: "3SBkh6oSAAdpQ5IYSZ1I40"){eventsInformation {json}}
  
  }`;

  const res = await graphql(query);

  return res.data.eventPage.eventsInformation.json;
};
