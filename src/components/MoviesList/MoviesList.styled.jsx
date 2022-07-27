import styled from 'styled-components';
import { TbMovie } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

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

  & li a {
    display: flex;
    align-items: center;
    color: ${p => p.theme.colors.text};
  }

  & li img {
    display: block;
    margin-right: 10px;
  }
`;

export const Icon = styled(TbMovie)`
  margin-right: 5px;
`;

export const StyledLink = styled(NavLink)`
  &:hover:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;
