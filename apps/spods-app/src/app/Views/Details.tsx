import { Route, Routes, useParams } from 'react-router-dom';
import { PodcastInterface } from '@spods/interfaces';
import { Fragment, lazy } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import { routes } from '../Routes';
import Podcast from '../Components/Podcast';

const Index = lazy(() => import('./Details/Index'));
const Episode = lazy(() => import('./Details/Episode'));

const Details = () => {
  /**
   * hooks
   */
  const { slug } = useParams();

  /**
   * state
   */
  const podcasts = useSelector((state: RootState) => state.podcasts.podcasts);

  /**
   * variables
   */
  const podcast: PodcastInterface | undefined = podcasts.find(
    (podcast) => podcast.slug === slug
  );

  return (
    <Fragment>
      {/* if podcast not found */}
      {!podcast && (
        <div className="p-10">
          <p>
            Podcast not found{' '}
            <span aria-label="Sad face" role="img">
              😔
            </span>
          </p>
        </div>
      )}

      {/* if podcast exist */}
      {podcast && (
        <Podcast.Layout podcast={podcast}>
          <Routes>
            <Route path="/" element={<Index podcast={podcast} />} />
            <Route
              path={routes.details.episode.replace(routes.details.index, '')}
              element={<Episode podcast={podcast} />}
            />
          </Routes>
        </Podcast.Layout>
      )}
    </Fragment>
  );
};

export default Details;
