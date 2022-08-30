import { Fragment } from 'react';
import { PodcastInterface } from '@spods/interfaces';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../../../store';
import { routes } from '../../../Routes';
import Podcast from '../../../Components/Podcast';

interface FeatureProps {
  podcast: PodcastInterface | undefined;
}

const Feature = (props: FeatureProps) => {
  /**
   * state
   */
  const podcasts = useSelector((state: RootState) => state.podcasts.podcasts);

  /**
   * variables
   */
  const podcast = props.podcast;
  const featurePodcasts: PodcastInterface[] = podcasts.filter(
    (i) => i.genre_slug === podcast?.genre_slug && i.slug !== podcast.slug
  );

  return (
    <section className="mb-12">
      <h3 className="mb-2">Feature podcasts</h3>

      <div className="d-flex overflow-auto gap-5">
        {featurePodcasts.map((featurePodcast, key) => (
          <Fragment key={key}>
            {key < 5 && (
              <Link
                to={routes.details.index.replace(':slug', featurePodcast.slug)}
              >
                <Podcast key={key} {...featurePodcast} />
              </Link>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Feature;
