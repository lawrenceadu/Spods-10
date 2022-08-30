interface PodcastInterface {
  /**
   * unique identifier for podcast
   */
  slug: string;
  /**
   * title of podcast
   */
  title: string;
  /**
   * date podcast was published
   */
  created_by: string;
  /**
   * cover image of podcast
   */
  cover_image: string;

  /**
   * about podcast
   */
  about: string;

  /**
   * summary of the podcast
   */
  summary: string;

  /**
   * section podcast belongs to
   */
  genre_slug: string;
}

export default PodcastInterface;
