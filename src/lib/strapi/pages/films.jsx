import { graphql } from '..';
import replaceVimeoLinkNoCookie from '../../../helpers/replaceVimeoLink';
import replaceYoutubeNoCookie from '../../../helpers/replaceYoutubeNoCookie';

export const getFilmList = async () => {
  const query = `
query($locale: I18NLocaleCode){
  kiFilmes(sort: "releaseYear:desc", locale: $locale) {
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
      film.videoLink = replaceYoutubeNoCookie(film.videoLink);

      film.videoLink = replaceVimeoLinkNoCookie(film.videoLink);
    }
  });

  return res.data.kiFilmes;
};

export const getFilmsContent = async () => {
  const query = `
    query ($locale: I18NLocaleCode) {
        filmPage (locale: $locale) {
            Introduction
        }
    }
    `;

  const res = await graphql(query);

  return res.data.filmPage.Introduction;
};
