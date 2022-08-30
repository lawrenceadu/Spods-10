import { PodcastInterface } from '@spods/interfaces';
import styled from 'styled-components';

const Index = ({ title, cover_image, created_by }: PodcastInterface) => {
  return (
    <StyledPodcast>
      <div>
        <img
          src={cover_image}
          alt={`${title} cover`}
          className="w-100 img-fit mb-4"
        />
      </div>

      <div className="text-truncate">
        <p className="fw-bold mb-1 text-truncate lead">{title}</p>
        <small className="text-gray fw-medium">{created_by}</small>
      </div>
    </StyledPodcast>
  );
};

/**
 * styles
 */
const StyledPodcast = styled.div`
  width: 12rem;
  flex: 0 0 12rem;
  border-radius: 0.5rem;

  img {
    height: 10rem;
    border-radius: 0.5rem;
    background-color: var(--sp-gray);
  }

  @media (min-width: 768px) {
    width: 15rem;
    flex: 0 0 15rem;
  }
`;

export default Index;
