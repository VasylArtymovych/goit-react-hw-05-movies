import styled from 'styled-components';

const Title = styled('h2')`
  font-size: ${p => p.fz || p.theme.fontSizes.l}px;
  font-weight: ${p => p.fw || p.theme.fontWeights.bold};
  color: ${p => p.color || p.theme.colors.white};
  /* padding: 20px 0px; */
`;

export default Title;
