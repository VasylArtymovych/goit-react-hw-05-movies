import Box from 'components/Box';
import { StyledBtn } from './Pagination.styled';

const Pagination = ({ page, totalPages, onClick }) => {
  const beforeTwoPage = page - 2;
  const beforePage = page - 1;
  const afterTwoPage = page + 2;
  const afterPage = page + 1;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItem="center"
      mt={4}
      pb={4}
    >
      {page > 1 && (
        <StyledBtn type="button" onClick={onClick}>
          prev
        </StyledBtn>
      )}
      {page > 1 && (
        <StyledBtn type="button" onClick={onClick}>
          1
        </StyledBtn>
      )}
      {page > 4 && <StyledBtn type="button">...</StyledBtn>}
      {page > 3 && (
        <StyledBtn type="button" onClick={onClick}>
          {beforeTwoPage}
        </StyledBtn>
      )}
      {page > 2 && (
        <StyledBtn type="button" onClick={onClick}>
          {beforePage}
        </StyledBtn>
      )}
      <StyledBtn type="button" onClick={onClick} current>
        {page}
      </StyledBtn>
      {page < totalPages - 1 && (
        <StyledBtn type="button" onClick={onClick}>
          {afterPage}
        </StyledBtn>
      )}
      {page < totalPages - 2 && (
        <StyledBtn type="button" onClick={onClick}>
          {afterTwoPage}
        </StyledBtn>
      )}
      {page < totalPages - 3 && <StyledBtn type="button">...</StyledBtn>}
      {page < totalPages && (
        <StyledBtn type="button" onClick={onClick}>
          {totalPages}
        </StyledBtn>
      )}
      {page < totalPages && (
        <StyledBtn type="button" onClick={onClick}>
          next
        </StyledBtn>
      )}
    </Box>
  );
};

export default Pagination;
