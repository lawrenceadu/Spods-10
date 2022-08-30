import { PodcastInterface } from '@spods/interfaces';
import { Icon } from '@spods/ui';
import styled from 'styled-components';

interface DetailsProps {
  podcast: PodcastInterface;
  children: React.ReactNode;
}

const Details = ({ podcast, children }: DetailsProps) => {
  return (
    <StyledDetails>
      <StyledSideInfo className="text-center text-md-left">
        <img
          src={podcast?.cover_image}
          alt={`${podcast?.cover_image} cover`}
          className="img-fluid img-fit mb-6 rounded mx-auto mx-md-0 d-block"
        />

        <div className="pb-6 border-bottom border-gray-3">
          <div className="mb-6">
            <h3 className="mb-2">{podcast?.title}</h3>
            <p className="lead text-gray">{podcast?.summary}</p>
          </div>

          <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-4">
            <Icon.Podcast color="var(--sp-gray)" />
            <Icon.RSS color="var(--sp-gray)" />
            <Icon.Hearts color="var(--sp-gray)" />
          </div>
        </div>
        <div className="text-gray d-none d-md-block mt-6">
          <small className="d-block mb-2 fw-bold">About podcast</small>
          <article dangerouslySetInnerHTML={{ __html: podcast?.about || '' }} />
        </div>
        <small className="d-block mt-2 text-gray">
          Hosted By{' '}
          <span className="text-decoration-underline cursor-pointer">
            {podcast.created_by}
          </span>
        </small>
      </StyledSideInfo>

      {children}
    </StyledDetails>
  );
};

/**
 * styles
 */
const StyledSideInfo = styled.div`
  padding: 2.5rem 1.25rem;
  background-color: var(--sp-gray-2);

  img {
    max-width: 7.5rem;
  }

  @media (min-width: 768px) {
    height: 100%;
    overflow-y: auto;
  }

  @media (min-width: 992px) {
    padding: 2.5rem;
    max-width: 100%;

    img {
      max-width: 100%;
    }
  }
`;

const StyledDetails = styled.div`
  @media (min-width: 768px) {
    height: 100%;
    display: grid;
    grid-template-columns: 20rem minmax(0, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: 25rem minmax(0, 1fr);
  }
`;

export default Details;
