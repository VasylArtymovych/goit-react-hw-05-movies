import styled from 'styled-components';
import { TbMovie } from 'react-icons/tb';

export const List = styled('ul')`
  list-style: none;
  list-style-position: inside;
  padding: 10px 20px;
  font-size: ${p => p.theme.fontSizes.m}px;
  & li {
    display: flex;
    align-items: center;
    padding: ${p => p.theme.space[2]}px;
  }
  & li:nth-child(odd) {
    background: rgb(222, 208, 172);
  }
`;

export const Icon = styled(TbMovie)`
  margin-right: 5px;
`;
