import { EpisodeInterface, PodcastInterface } from '@spods/interfaces';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../store';
import Podcast from '../../../Components/Podcast';

interface EpisodesProps {
  search: string;
  podcast: PodcastInterface;
}

const Episodes = ({ search, podcast }: EpisodesProps) => {
  /**
   * state
   */
  const allEpisodes = useSelector(
    (state: RootState) => state.podcasts.episodes
  );

  /**
   * variables
   */
  const episodes: EpisodeInterface[] = allEpisodes.filter(
    ({ podcast_slug }) => podcast_slug === podcast.slug
  );

  return (
    <section>
      {episodes
        .filter(({ title }) => title.toLowerCase().includes(search || ''))
        .map((episode, key) => (
          <Podcast.Episode key={key} {...{ podcast, ...episode }} />
        ))}
    </section>
  );
};

export default Episodes;
