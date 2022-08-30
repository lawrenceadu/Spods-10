import { Icon, useWidth } from '@spods/ui';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { routes } from '../Routes';

interface LayoutProps {
  children: React.ReactNode;
}

interface NavbarProps {
  isMobile: boolean;
}

const Layout = ({ children }: LayoutProps) => {
  /**
   * variables
   */
  const width = useWidth();
  const navItems = [
    {
      name: 'Home',
      icon: Icon.Home,
      path: routes.home,
    },
    {
      name: 'Search',
      icon: Icon.Search,
      path: routes.search,
    },
  ];

  return (
    <StyledLayout>
      <StyledNavbar isMobile={Boolean(width < 768)} aria-label="side nav">
        <StyledNavItems>
          {navItems.map((item, key) => (
            <li key={key}>
              <NavLink to={item.path}>
                {({ isActive }) => (
                  <item.icon
                    aria-label={item.name}
                    variant={isActive ? 'default' : 'outline'}
                    color={isActive ? '#fff' : 'var(--sp-gray)'}
                  />
                )}
              </NavLink>
            </li>
          ))}
        </StyledNavItems>
      </StyledNavbar>

      <StyledMain>{children}</StyledMain>
    </StyledLayout>
  );
};

/**
 * styles
 */

const StyledMain = styled.main`
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    height: 100%;
    overflow-y: auto;
    padding-bottom: 0;
  }
`;

const StyledNavItems = styled.ul`
  padding: 0;
  height: 100%;
  display: grid;
  list-style: none;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);

  li {
    a {
      display: block;
      text-align: center;
      padding: 0.5rem 1rem;
    }
  }

  @media (min-width: 768px) {
    height: auto;
    display: block;
  }
`;

const StyledNavbar = styled('nav').withConfig({
  shouldForwardProp: (props, func) =>
    !['isMobile'].includes(props) && func(props),
})<NavbarProps>(({ isMobile }) =>
  isMobile
    ? `
      bottom: 0;
      z-index: 10;
      width: 100%;
      height: 4rem;
      position: fixed;
      background-color: var(--sp-gray-2);
      border-top: solid 1px var(--sp-gray-3);
    `
    : `
      height: 100%;
      padding: 2rem 0;
      background-color: var(--sp-gray-2);
      border-right: solid 1px var(--sp-gray-3);
`
);

const StyledLayout = styled.div`
  height: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 4rem minmax(0, 1fr);
  }
`;

export default Layout;
