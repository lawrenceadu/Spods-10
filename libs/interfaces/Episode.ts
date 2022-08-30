interface EpisodeInterface {
  /**
   * length of the episode
   */
  duration: number | string;

  /**
   * title of the episode
   */
  title: string;

  /**
   * unique ID of the episode
   */
  slug: string;

  /**
   * date eposide was published
   */
  created_at: string | Date;

  /**
   * brief introduction to the episode
   */
  summary: string;

  /**
   * detailed description of the episode
   */
  description?: string;

  /**
   * media url to play audio
   */
  media_url: string;

  /**
   * cover image
   */
  cover_image?: string;

  /**
   * podcast slug of podcast it belongs to
   */
  podcast_slug: string;

  /**
   * episode number
   */
  number: number;
}

export default EpisodeInterface;
