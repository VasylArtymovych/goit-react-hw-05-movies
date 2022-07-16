import styled from 'styled-components';

export const CasList = styled('ul')`
  list-style: none;
  padding: 0px 20px 20px;
  font-size: ${p => p.theme.fontSizes.m}px;
  & li {
    padding: ${p => p.theme.space[2]}px;
  }
  & li:nth-child(odd) {
    background: rgb(222, 208, 172);
  }
`;
