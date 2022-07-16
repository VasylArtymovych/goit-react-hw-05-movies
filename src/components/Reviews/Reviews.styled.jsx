import styled from 'styled-components';

const ReviewdList = styled('ul')`
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
const ReviewdText = styled('p')`
  font-size: 34px;
  text-align: center;
  padding-bottom: 20px;
  color: ${p => p.theme.colors.accent};
`;

export { ReviewdList, ReviewdText };
