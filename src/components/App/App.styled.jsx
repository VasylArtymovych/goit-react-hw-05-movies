import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  min-height: 100vh;
  background: grey;

  box-shadow: ${({ theme }) => `0px 0px 10px ${theme.colors.primary}`};

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
