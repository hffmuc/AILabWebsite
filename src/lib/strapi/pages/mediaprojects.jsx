/* eslint-disable import/prefer-default-export */
import { graphql } from '..';
import replaceVimeoLinkNoCookie from '../../../helpers/replaceVimeoLink';
import replaceYoutubeNoCookie from '../../../helpers/replaceYoutubeNoCookie';

export const getMediaprojectsList = async () => {
  const query = `
  {
  kiMedienprojekts(sort: "releaseYear:desc") {
    data {
      attributes {
        name
        description
        releaseYear
        image {
          data {
            attributes {
              url
            }
          }
        }
        videoLink
        videoLink2
        artists
        link
        HFFproject
      }
    }
  }
}
      `;

  const res = await graphql(query);

  res.data.kiMedienprojekts.data.forEach((medienprojekt) => {
    if (medienprojekt.attributes.videoLink) {
      // eslint-disable-next-line no-param-reassign
      medienprojekt.attributes.videoLink = replaceYoutubeNoCookie(
        medienprojekt.attributes.videoLink
      );
      // eslint-disable-next-line no-param-reassign
      medienprojekt.attributes.videoLink = replaceVimeoLinkNoCookie(
        medienprojekt.attributes.videoLink
      );
    }

    if (medienprojekt.attributes.videoLink2) {
      // eslint-disable-next-line no-param-reassign
      medienprojekt.attributes.videoLink2 = replaceYoutubeNoCookie(
        medienprojekt.attributes.videoLink2
      );
      // eslint-disable-next-line no-param-reassign
      medienprojekt.attributes.videoLink2 = replaceVimeoLinkNoCookie(
        medienprojekt.attributes.videoLink2
      );
    }
  });

  return res.data.kiMedienprojekts.data;
};

export const getMediaProjectsContent = async () => {
  const query = `
    {
  medienprojektePage {
    data {
      attributes {
        Introduction
      }
    }
  }
}

    `;

  const res = await graphql(query);

  return res.data.medienprojektePage.data.attributes.Introduction;
};
