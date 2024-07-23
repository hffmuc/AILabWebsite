/* eslint-disable import/prefer-default-export */
import { graphql } from '..';
import replaceVimeoLinkNoCookie from '../../../helpers/replaceVimeoLink';
import replaceYoutubeNoCookie from '../../../helpers/replaceYoutubeNoCookie';

export const getFilmList = async () => {
  const query = `
{
  kiFilmes(sort: "releaseYear:desc") {
    data {
      attributes {
        filmtitle
        description
        videoLink
        link
        length
        filmmaker
        additionalInformation
        releaseYear
      }
    }
  }
}
      `;

  const res = await graphql(query);

  res.data.kiFilmes.data.forEach((film) => {
    if (film.attributes.videoLink) {
      // eslint-disable-next-line no-param-reassign
      film.attributes.videoLink = replaceYoutubeNoCookie(film.attributes.videoLink);
      // eslint-disable-next-line no-param-reassign
      film.attributes.videoLink = replaceVimeoLinkNoCookie(film.attributes.videoLink);
    }
  });

  return res.data.kiFilmes.data;
};

export const getFilmsContent = async () => {
  const query = `
    query {
        filmPage {
        data {
            attributes {
            Introduction
            }
        }
        }
    }
    `;

  const res = await graphql(query);

  return res.data.filmPage.data.attributes.Introduction;
};
