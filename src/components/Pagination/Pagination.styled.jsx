import styled, { css } from 'styled-components';

export const StyledBtn = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 25px;
  padding: ${p => p.theme.space[3]}px;
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[2]}px;
  }
  font-size: ${p => p.theme.fontSizes.xs}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  outline: none;
  background: ${p =>
    p.current ? p.theme.colors.active : p.theme.colors.white};
  color: ${p => (p.current ? p.theme.colors.white : p.theme.colors.text)};
  ${p => {
    if (!p.current) {
      return css`
        &:hover {
          background: ${p => p.theme.colors.accent};
          box-shadow: 0px 0px 4px 4px ${p => p.theme.colors.white};
          font-size: ${p => p.theme.fontSizes.s}px;
        }
      `;
    }
  }}

  @media (min-width: 768px) {
    width: 45px;
    height: 35px;
    font-size: ${p => p.theme.fontSizes.s}px;
    ${p => {
      if (!p.current) {
        return css`
          &:hover {
            font-size: ${p => p.theme.fontSizes.m}px;
          }
        `;
      }
    }}
  }
`;
