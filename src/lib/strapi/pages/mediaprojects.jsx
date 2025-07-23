import { graphql } from '..';
import replaceVimeoLinkNoCookie from '../../../helpers/replaceVimeoLink';
import replaceYoutubeNoCookie from '../../../helpers/replaceYoutubeNoCookie';

export const getMediaprojectsList = async () => {
  const query = `
  query ($locale: I18NLocaleCode){
  kiMedienprojekts(sort: "releaseYear:desc", locale: $locale) {
        name
        description
        releaseYear
        image {
              url
        }
        videoLink
        videoLink2
        artists
        link
        HFFproject
      }
}
      `;

  const res = await graphql(query);

  res.data.kiMedienprojekts.forEach((medienprojekt) => {
    if (medienprojekt.videoLink) {
      medienprojekt.videoLink = replaceYoutubeNoCookie(medienprojekt.videoLink);

      medienprojekt.videoLink = replaceVimeoLinkNoCookie(
        medienprojekt.videoLink
      );
    }

    if (medienprojekt.videoLink2) {
      medienprojekt.videoLink2 = replaceYoutubeNoCookie(
        medienprojekt.videoLink2
      );

      medienprojekt.videoLink2 = replaceVimeoLinkNoCookie(
        medienprojekt.videoLink2
      );
    }
  });

  return res.data.kiMedienprojekts;
};

export const getMediaProjectsContent = async () => {
  const query = `
    query ($locale: I18NLocaleCode) {
  medienprojektePage (locale: $locale) {
        Introduction
      }
}

    `;

  const res = await graphql(query);

  return res.data.medienprojektePage?.Introduction;
};
