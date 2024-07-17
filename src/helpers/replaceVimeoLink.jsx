function replaceVimeoLinkNoCookie(videoUrl) {
  // Use the replace function to create the embed URL
  if (videoUrl.includes('vimeo.com') && !videoUrl.includes('player.vimeo.com')) {
    // Replace the vimeo.com domain with the player.vimeo.com domain
    const embedUrl = videoUrl.replace('vimeo.com', 'player.vimeo.com/video');
    return `${embedUrl}?dnt=1`;
  }
  return videoUrl;
}

export default replaceVimeoLinkNoCookie;
