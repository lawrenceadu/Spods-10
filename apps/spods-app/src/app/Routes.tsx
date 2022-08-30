import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Layout from './Components/Layout';

const Home = lazy(() => import('./Views/Home'));
const Search = lazy(() => import('./Views/Search'));
const Details = lazy(() => import('./Views/Details'));

function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<p>Loading</p>}>
          <Switch>
            <Route index element={<Home />} />
            <Route path={routes.search} element={<Search />} />
            <Route path={`${routes.details.index}/*`} element={<Details />} />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

// global routes
export const routes = {
  home: '/',
  search: '/search',
  details: {
    index: '/details/:slug',
    episode: '/details/:slug/ep/:epslug',
  },
};

export default Routes;
