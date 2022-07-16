import routePaths from 'RouteSettings/Settings';
import { Container, StyledLink } from './HeaderBar.styled';

export default function HeaderBar() {
  return (
    <Container>
      <StyledLink to={routePaths.home}>Home</StyledLink>
      <StyledLink to={routePaths.movies}>Movies</StyledLink>
    </Container>
  );
}
