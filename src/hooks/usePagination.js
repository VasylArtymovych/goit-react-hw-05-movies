import { useState } from 'react';
const usePagination = (page = 1, total = 1) => {
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(total);

  const onBtnClick = e => {
    const value = e.target.textContent;

    if (value === 'next') {
      return setCurrentPage(state => state + 1);
    }
    if (value === 'prev') {
      return setCurrentPage(state => state - 1);
    }
    setCurrentPage(Number(value));
  };

  return { currentPage, totalPages, setTotalPages, onBtnClick };
};

export default usePagination;
