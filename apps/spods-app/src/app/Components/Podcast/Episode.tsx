import { EpisodeInterface, PodcastInterface } from '@spods/interfaces';
import { Button, Icon, useWidth } from '@spods/ui';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { routes } from '../../Routes';

interface EpisodeProps extends EpisodeInterface {
  podcast: PodcastInterface;
}

const Episode = ({ podcast, ...props }: EpisodeProps) => {
  /**
   * hooks
   */
  const width = useWidth();

  return (
    <StyledEpisode
      as={Link}
      to={routes.details.episode
        .replace(':slug', podcast.slug)
        .replace(':epslug', props.slug)}
    >
      {width >= 992 && (
        <StyledImageWrapper className="rounded overflow-hidden">
          <img
            alt="Episode cover"
            className="img-fit img-fluid"
            src={props.cover_image || podcast.cover_image}
          />
          <div className="d-flex flex-column p-2">
            <small className="caption fw-medium text-uppercase">
              {dayjs(props.created_at).format('MMMM DD')}
            </small>

            <div className="mt-auto">
              <small className="caption fw-medium d-block mb-2 text-uppercase">
                {props.duration} minutes
              </small>

              <h1 className="fw-bolder">E{props.number}</h1>
            </div>
          </div>
        </StyledImageWrapper>
      )}
      <StyledContentWrapper className="text-gray d-flex flex-column">
        <div className="mb-6">
          <small className="d-block mb-1 fw-bold">ESP {props.number}</small>
          <h5 className="text-white mb-2">{props.title}</h5>
          <p>{props.summary}</p>
        </div>

        <div className="d-flex mt-auto align-items-center gap-4">
          <Button className="gap-2">
            <Icon.VoicePoint size={18} color="#fff" />
            <small>LISTEN</small>
          </Button>
          <small className="fw-medium">
            {dayjs(props.created_at).format('MMMM DD, YYYY')}
          </small>
        </div>
      </StyledContentWrapper>
    </StyledEpisode>
  );
};

/**
 * styles
 */
const StyledContentWrapper = styled.div`
  max-width: 43.75rem;
`;

const StyledImageWrapper = styled.div`
  width: 11.25rem;
  height: 11.25rem;
  position: relative;

  img {
    position: absolute;
  }

  & > div {
    z-index: 1;
    height: 100%;
    position: relative;
    background-color: rgba(var(--sp-gray-3-rgb), 0.45);

    h1 {
      font-size: 3rem;
    }
  }
`;

const StyledEpisode = styled.div`
  display: block;
  padding: 1.5rem 0;
  transition: ease-in-out 0.1s all;
  border-top: solid 1px var(--sp-gray-3);

  &:hover {
    padding: 1.5rem;
    margin: 0 -1.5rem;
    border-radius: 0.25rem;
    background-color: var(--sp-gray-3);
  }

  @media (min-width: 992px) {
    gap: 1.5rem;
    display: grid;
    grid-template-columns: 11.25rem minmax(0, 1fr);

    img {
      width: 11.25rem;
      height: 11.25rem;
    }
  }
`;

export default Episode;
