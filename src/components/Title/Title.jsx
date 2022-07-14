import styled from 'styled-components';

const Title = styled('h2')`
  padding: ${p => p.p || p.theme.space[3]}px;
  margin-top: 0;
  border-radius: 8px;
  color: ${p => p.color || p.theme.colors.white};
  font-size: ${p => p.fz || p.theme.fontSizes.l}px;
  font-weight: ${p => p.fw || p.theme.fontWeights.bold};
  text-align: center;
  text-shadow: 0 2px 4px orange;

  /* background-image: repeating-linear-gradient(
    -45deg,
    rgb(47, 44, 185),
    rgb(16, 15, 60) 15px,
    rgb(21, 138, 159) 15px,
    rgb(21, 138, 159) 30px
  ); */
`;

export default Title;
