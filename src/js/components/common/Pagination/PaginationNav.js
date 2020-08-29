import React from 'react';

import { LEFT_PAGE, RIGHT_PAGE } from '@commonReact/Pagination/constants';

function PaginationNav({ next, prev, jump, currentPage, maxPage, pages, nextPage, prevPage, lastPage, firstPage }) {
   return (
      <nav className="pagination">
         <ul className="pagination-wrapper">
            <li
               className={`pagination-item pagination-chevron ${currentPage === 1 ? 'disabled' : ''}`}>
               <a href="#" onClick={firstPage}>
                  <span
                     aria-label="Jump First"
                     className="screen-reader"
                     aria-hidden="true"
                  >
                     Jump first
                  </span>
                  <span className="chevron-left chevron-first" />
               </a>
            </li>
            <li
               className={`pagination-item pagination-chevron ${currentPage === 1 ? 'disabled' : ''}`}
               aria-disabled={currentPage === 1 && true}
            >
               <a href="#" onClick={prevPage}>

                  <span
                     aria-label="Jump Previous"
                     className="screen-reader"
                     aria-hidden="true"
                  >
                     Jump Previous
                  </span>
                  <span className="chevron-left" />
               </a>

            </li>
            {pages.map((page, index) => {
               if (page === LEFT_PAGE) {
                  return (
                     <li
                        key={index}
                        className="pagination-item"
                        aria-label="Previous"

                     >
                        <a href="#" onClick={prev}>
                           <span>...</span>
                           <span
                              className="screen-reader"
                              aria-hidden="true"
                           >Previous</span>
                        </a>
                     </li>
                  );
               }

               if (page === RIGHT_PAGE) {
                  return (
                     <li
                        key={index}
                        className="pagination-item"

                     >
                        <a href="#" onClick={next}>
                           <span aria-hidden="true">...</span>
                           <span
                              className="screen-reader"
                              aria-hidden="true"
                           >Next</span>
                        </a>
                     </li>
                  );
               }


               return (
                  <li
                     key={index}
                     className="pagination-item"
                  >
                     <a
                        href="#"
                        aria-label="Next"
                        onClick={e => jump(e, page)}
                        className={`pagination-item${
                           currentPage === page ? ' active' : ''
                           }`}
                     >
                        {page}
                     </a>


                  </li>
               );
            })}
            <li
               className={`pagination-item pagination-chevron ${currentPage === maxPage ? 'disabled' : ''}`}>
               <a href="#" onClick={nextPage}>
                  <span
                     aria-label="Jump Next"
                     className="screen-reader"
                     aria-hidden="true"
                  >
                     Jump Next
                  </span>
                  <span className="chevron-right" />
               </a>
            </li>
            <li
               className={`pagination-item pagination-chevron ${currentPage === maxPage ? 'disabled' : ''}`}>
               <a href="#" className="last-of-type" onClick={lastPage}>
                  <span
                     aria-label="Jump Last"
                     className="screen-reader"
                     aria-hidden="true"
                  >
                     Jump Last
                  </span>
                  <span className="chevron-right chevron-last" />

               </a>
            </li>
         </ul>
      </nav>
   );
}

export default PaginationNav;
