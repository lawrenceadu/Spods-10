import { EpisodeInterface, PodcastInterface } from '@spods/interfaces';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Icon } from '@spods/ui';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { RootState } from '../../../store';
import { routes } from '../../Routes';

interface EpisodeProps {
  podcast: PodcastInterface;
}

const Episode = ({ podcast }: EpisodeProps) => {
  /**
   * state
   */
  const allEpisodes = useSelector(
    (state: RootState) => state.podcasts.episodes
  );

  /**
   * variables
   */
  const { epslug } = useParams();
  const episode: EpisodeInterface | undefined = allEpisodes.find(
    ({ slug }) => slug === epslug
  );

  /**
   * hooks
   */
  const navigation = useNavigate();

  return (
    <StyledContent>
      {!episode && <p>Episode not found</p>}

      {episode && (
        <Fragment>
          <section>
            <Button
              bg="transparent"
              className="gap-2 mb-6"
              color="var(--sp-gray-1)"
              border="var(--sp-gray-3)"
              onClick={() =>
                navigation(routes.details.index.replace(':slug', podcast.slug))
              }
            >
              <Icon.Arrow size={18} direction="left" color="var(--sp-gray-1)" />
              <small>Back to podcast</small>
            </Button>

            <div className="mb-8">
              <h2 className="mb-2">{episode.title}</h2>
              <p className="mb-2 text-gray">{episode.summary}</p>
              <small className="text-green fw-medium">
                EPS. {episode.number} /{' '}
                {dayjs(episode.created_at).format('MMMM DD, YYYY')}
              </small>
            </div>

            <div className="mb-8">
              <iframe
                width="100%"
                height="152"
                loading="lazy"
                frameBorder="0"
                title={episode.title}
                style={{ borderRadius: 12 }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                src="https://open.spotify.com/embed/episode/5KzGpGzguTYlrzdC2lEQ40?utm_source=generator&theme=0"
              />
            </div>

            <div className="text-gray">
              <p className="fw-bold mb-2">Notes</p>
              <StyledNotes
                dangerouslySetInnerHTML={{ __html: episode.description || '' }}
              />
            </div>
          </section>
          <aside>
            <StyledImageWrapper className="overflow-hidden rounded mb-6">
              <img
                alt="Episode cover"
                className="img-fit w-100"
                src={episode.cover_image || podcast.cover_image}
              />

              <div className="d-flex flex-column p-2 p-4">
                <small className="fw-medium text-uppercase">
                  {dayjs(episode.created_at).format('MMMM DD')}
                </small>

                <div className="mt-auto">
                  <small className="fw-bold d-block text-uppercase">
                    {episode.duration} minutes
                  </small>

                  <h1 className="fw-bolder">E{episode.number}</h1>
                </div>
              </div>
            </StyledImageWrapper>

            <div>
              <small className="fw-bold text-gray mb-3 d-block">
                Share to social
              </small>
              <div className="d-flex gap-2">
                <Icon.Logo.Twitter color="var(--sp-gray)" />
                <Icon.Logo.LinkedIn color="var(--sp-gray)" />
                <Icon.Logo.Facebook color="var(--sp-gray)" />
                <Icon.Logo.Instagram color="var(--sp-gray)" />
              </div>
            </div>
          </aside>
        </Fragment>
      )}
    </StyledContent>
  );
};

/**
 * styles
 */
const StyledImageWrapper = styled.div`
  width: 18rem;
  height: 18rem;
  position: relative;

  @media (min-width: 576px) {
    width: 20.5rem;
    height: 20.5rem;
  }

  img {
    position: absolute;
  }

  & > div {
    z-index: 1;
    height: 100%;
    position: relative;
    background-color: rgba(var(--sp-gray-3-rgb), 0.45);

    h1 {
      font-size: 6rem;
    }
  }
`;

const StyledNotes = styled.article`
  p {
    margin-bottom: 1rem;
  }
`;

const StyledContent = styled.div`
  gap: 2.5rem;
  display: grid;
  padding: 2.5rem 1.25rem;

  @media (min-width: 768px) {
    height: 100%;
    overflow-y: auto;
  }

  @media (min-width: 992px) {
    padding: 2.5rem;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
    grid-template-columns: minmax(0, 37rem) 20.5rem;
  }
`;

export default Episode;
