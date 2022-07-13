import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function HeaderBar() {
  return (
    <Container>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </Container>
  );
}

const Container = styled('div')`
  width: 100%;
  padding: ${p => p.theme.space[5]}px;

  border-bottom: 2px solid ${p => p.theme.colors.accent};
  background: linear-gradient(to top right, rgb(16, 15, 60), rgb(85, 204, 225));
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  margin-right: 15px;
  color: ${p => p.theme.colors.primary};

  &.active {
    color: red;
  }
`;
