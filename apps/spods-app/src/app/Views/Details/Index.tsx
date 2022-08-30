import { Fragment, useState } from 'react';
import { PodcastInterface } from '@spods/interfaces';
import styled from 'styled-components';

import SearchAndFilter from './Index/SearchAndFilter';
import Episodes from './Index/Episodes';
import Feature from './Index/Feature';

interface IndexProps {
  podcast: PodcastInterface;
}

const Index = ({ podcast }: IndexProps) => {
  /**
   * state
   */
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

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
        <Content>
          <Feature podcast={podcast} />

          <section>
            <SearchAndFilter {...{ search, setSearch, filter, setFilter }} />
            <Episodes {...{ search, podcast }} />
          </section>
        </Content>
      )}
    </Fragment>
  );
};

/**
 * styles
 */
const Content = styled.div`
  padding: 2.5rem 1.25rem;

  @media (min-width: 768px) {
    height: 100%;
    overflow-y: auto;
  }

  @media (min-width: 992px) {
    padding: 2.5rem;
  }
`;

export default Index;
