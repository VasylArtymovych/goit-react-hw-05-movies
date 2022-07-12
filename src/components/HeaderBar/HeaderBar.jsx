import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function HeaderBar() {
  return (
    <Container width="100%" minHeight="60px" p={5}>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </Container>
  );
}

const Container = styled('div')`
  width: 100%;
  padding: ${p => p.theme.space[5]}px;

  border-bottom: 2px solid ${p => p.theme.colors.accent};
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
