import { useState } from 'react';
const usePagination = (page = 1, total = 1) => {
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(total);

  const onBtnClick = e => {
    const value = e.target.textContent;
    if (value === 'right') {
      setCurrentPage(state => state + 1);
      return;
    }
    if (value === 'left') {
      setCurrentPage(state => state - 1);
      return;
    }
    setCurrentPage(Number(value));
  };

  return { currentPage, totalPages, setTotalPages, onBtnClick };
};

export default usePagination;
