import React from 'react';
import { LEFT_PAGE, RIGHT_PAGE } from '@commonReact/Pagination/constants';
const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

function usePagination(data, rowsPerPage = 10, pageNeighbours = 2) {
   const [currentPage, setCurrentPage] = React.useState(1);

   const itemsPerPage = typeof rowsPerPage === 'number' ? rowsPerPage : data.length;

   // Number of  pages
   const maxPage = Math.ceil(data.length / itemsPerPage);

   function createPageNumbers() {

      const totalNumbers = (pageNeighbours * 2) + 3;
      const totalBlocks = totalNumbers + 2;

      if (maxPage > totalBlocks) {
         let pages = [];

         const leftBound = currentPage - pageNeighbours;
         const rightBound = currentPage + pageNeighbours;
         const beforeLastPage = maxPage - 1;

         const startPage = leftBound > 2 ? leftBound : 2;
         const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

         pages = range(startPage, endPage);

         const pagesCount = pages.length;
         const singleSpillOffset = totalNumbers - pagesCount - 1;

         const leftSpill = startPage > 2;
         const rightSpill = endPage < beforeLastPage;


         if (leftSpill && !rightSpill) {
            const extraPages = range(startPage - singleSpillOffset, startPage - 1);
            pages = [LEFT_PAGE, ...extraPages, ...pages];
         } else if (!leftSpill && rightSpill) {
            const extraPages = range(endPage + 1, endPage + singleSpillOffset);
            pages = [...pages, ...extraPages, RIGHT_PAGE];
         } else if (leftSpill && rightSpill) {
            pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
         }


         return [1, ...pages, maxPage];
      }
      return range(1, maxPage);
   }

   const gotoPage = page => {
      const currentPage = Math.max(0, Math.min(page, data.length));
      setCurrentPage(currentPage);

   };
   function nextPage(e) {
      e.preventDefault();
      setCurrentPage(() => Math.min(currentPage + 1, maxPage));
   }
   function lastPage(e) {
      e.preventDefault();
      setCurrentPage(maxPage);
   }

   function firstPage(e) {
      e.preventDefault();
      setCurrentPage(1);
   }

   function prevPage(e) {
      e.preventDefault();
      setCurrentPage(() => Math.min(currentPage - 1, currentPage));
   }

   function next(e) {
      e.preventDefault();
      gotoPage(currentPage + 1 * 2 + 1);
   }

   function prev(e) {
      e.preventDefault();
      gotoPage(currentPage - 1 * 2 - 1);
   }

   function jump(e, page) {
      e.preventDefault();
      gotoPage(page);
   }

   function currentData() {
      const begin = (currentPage - 1) * itemsPerPage;
      const end = begin + itemsPerPage;
      return data.slice(begin, end);
   }

   const pages = createPageNumbers(currentPage);

   React.useEffect(() => {
      if (currentPage >= data.length) {
         setCurrentPage(1);
      }
      if (data.length <= itemsPerPage) {
         setCurrentPage(1);
      }

   });

   return { next, prev, jump, currentData, currentPage, maxPage, pages, nextPage, prevPage, lastPage, firstPage };
}

export default usePagination;
