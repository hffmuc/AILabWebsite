/* eslint-disable import/prefer-default-export */
import { graphql } from '..';
import replaceVimeoLinkNoCookie from '../../../helpers/replaceVimeoLink';
import replaceYoutubeNoCookie from '../../../helpers/replaceYoutubeNoCookie';

export const getFilmList = async () => {
  const query = `
{
  kiFilmes(sort: "releaseYear:desc") {
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
      `;

  const res = await graphql(query);

  res.data.kiFilmes.forEach((film) => {
    if (film.videoLink) {
      // eslint-disable-next-line no-param-reassign
      film.videoLink = replaceYoutubeNoCookie(film.videoLink);
      // eslint-disable-next-line no-param-reassign
      film.videoLink = replaceVimeoLinkNoCookie(film.videoLink);
    }
  });

  return res.data.kiFilmes;
};

export const getFilmsContent = async () => {
  const query = `
    query {
        filmPage {
            Introduction
        }
    }
    `;

  const res = await graphql(query);

  return res.data.filmPage.Introduction;
};
