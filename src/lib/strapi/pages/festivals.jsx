/* eslint-disable import/prefer-default-export */
import { graphql } from '..';

export const getFestivalList = async () => {
  const query = `
{
  festivals {
        name
        month
        shortDescription
        location
        link
  }
} 
      `;

  const res = await graphql(query);

  return res.data.festivals;
};

export const getFestivalsContent = async () => {
  const query = `
    query {
        festivalsPage {
            introduction
        }
    }
    `;

  const res = await graphql(query);

  return res.data.festivalsPage.introduction;
};
