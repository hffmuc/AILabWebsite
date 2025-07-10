/* eslint-disable import/prefer-default-export */
import { graphql } from '..';
import replaceVimeoLinkNoCookie from '../../../helpers/replaceVimeoLink';
import replaceYoutubeNoCookie from '../../../helpers/replaceYoutubeNoCookie';

export const getMediaprojectsList = async () => {
  const query = `
  {
  kiMedienprojekts(sort: "releaseYear:desc") {
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
      // eslint-disable-next-line no-param-reassign
      medienprojekt.videoLink = replaceYoutubeNoCookie(medienprojekt.videoLink);
      // eslint-disable-next-line no-param-reassign
      medienprojekt.videoLink = replaceVimeoLinkNoCookie(medienprojekt.videoLink);
    }

    if (medienprojekt.videoLink2) {
      // eslint-disable-next-line no-param-reassign
      medienprojekt.videoLink2 = replaceYoutubeNoCookie(medienprojekt.videoLink2);
      // eslint-disable-next-line no-param-reassign
      medienprojekt.videoLink2 = replaceVimeoLinkNoCookie(medienprojekt.videoLink2);
    }
  });

  return res.data.kiMedienprojekts;
};

export const getMediaProjectsContent = async () => {
  const query = `
    {
  medienprojektePage {
        Introduction
      }
}

    `;

  const res = await graphql(query);

  return res.data.medienprojektePage?.Introduction;
};
