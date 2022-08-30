import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { RootState } from '../../store';
import { routes } from '../Routes';
import Podcast from '../Components/Podcast';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const { genres, podcasts } = useSelector(
    (state: RootState) => state.podcasts
  );

  return (
    <StyledHome className="py-10">
      {genres.map((genre, key) => (
        <section key={key} className="mb-6">
          <div className="px-6 px-md-10 mb-2">
            <h3>{genre.title}</h3>
          </div>

          <Items className="d-flex gap-5 px-6 px-md-10">
            {podcasts
              .filter(({ genre_slug }) => genre_slug === genre.slug)
              .map((podcast, key) => (
                <Link
                  key={key}
                  className="d-block"
                  to={routes.details.index.replace(':slug', podcast.slug)}
                >
                  <Podcast {...podcast} />
                </Link>
              ))}
          </Items>
        </section>
      ))}
    </StyledHome>
  );
}

/**
 * styles
 */
const Items = styled.div`
  overflow-x: auto;
`;

const StyledHome = styled.div``;

export default Home;
