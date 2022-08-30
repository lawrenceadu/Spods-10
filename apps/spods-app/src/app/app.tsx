import { useEffect, useCallback } from 'react';
import { EpisodeInterface, GenreInterface, PodcastInterface } from '@spods/interfaces'; // prettier-ignore
import { useSelector, useDispatch } from 'react-redux';
import { faker } from '@faker-js/faker';
import kebabCase from 'lodash-es/kebabCase';

import { RootState } from '../store';
import { populate } from '../store/podcastStore';
import Routes from './Routes';

const App = () => {
  const dispatch = useDispatch();

  /**
   * state
   */
  const genres = useSelector((state: RootState) => state.podcasts.genres);

  /**
   * functions
   */
  const handlePopulate = useCallback(() => {
    // set sections
    const genres: GenreInterface[] = [];

    Array.from({ length: 5 }, (_i, i) => {
      const title = faker.music.genre();
      return genres.push({
        title,
        slug: kebabCase(title),
      });
    });

    // set podcasts
    const podcasts: PodcastInterface[] = [];

    genres.map((genre) =>
      Array.from({ length: 10 }, () => {
        const title = faker.music.songName();

        return podcasts.push({
          title,
          slug: kebabCase(title),
          genre_slug: genre.slug,
          about: faker.lorem.sentence(30),
          created_by: faker.name.fullName(),
          summary: faker.lorem.sentence(15),
          cover_image: faker.image.abstract(328, 328, true),
        });
      })
    );

    // set episodes
    const episodes: EpisodeInterface[] = [];

    podcasts.map((podcast) =>
      Array.from({ length: 5 }, (_, i) => {
        const title = faker.music.songName();

        return episodes.push({
          title,
          number: i + 1,
          slug: kebabCase(title),
          podcast_slug: podcast.slug,
          created_at: faker.date.past(),
          duration: faker.random.numeric(2),
          summary: faker.lorem.sentence(20),
          description: faker.lorem.paragraphs(3),
          cover_image: faker.image.city(180, 180, true),
          media_url: '',
        });
      })
    );

    return dispatch(populate({ genres, podcasts, episodes }));
  }, [dispatch]);

  /**
   * effect
   */
  useEffect(() => {
    if (!genres.length) {
      console.log('hi');
      handlePopulate();
    }
  }, [genres, handlePopulate]);

  return <Routes />;
};

export default App;
