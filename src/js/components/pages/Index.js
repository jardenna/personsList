import React from 'react';

import data from '@data';

import { TableConstants } from '@pages/list/TableConstant';

import useFilter from '@hooks/useFilter';
import usePagination from '@hooks/usePagination';

import context from '@commonReact/context';
import Filter from '@commonReact/Filter';
import PaginationNav from '@commonReact/Pagination/PaginationNav';
import Table from '@commonReact/Table';

const Dashboard = () => {

   const filterObj = {
      name1: ''
   };

   //Filter: filterObj = The key for the filter input. 'email' = Additional filtered text
   const { handleFilterChange, values, handleEmptyInput, filteredText } = useFilter(filterObj, data, 'email');

   //Number of rows to be shown
   const rowsPerPage = 5;

   //Pagination: filteredText = data to be shown. 
   const { next, prev, jump, currentPage, currentData, maxPage, pages, nextPage, prevPage, lastPage, firstPage } = usePagination(filteredText, rowsPerPage);
   const tableContextValues = { cols: TableConstants(), data: currentData(filteredText), handleFilterChange, value: values.name1, name: 'name1', handleEmptyInput, placeholder: 'Users' };
   return (
      <context.Provider value={tableContextValues}>
         <Filter />
         <div style={{ minHeight: rowsPerPage * 95 }}>
            <Table />
         </div>
         <PaginationNav
            next={next}
            prev={prev}
            jump={jump}
            currentPage={currentPage}
            maxPage={maxPage}
            pages={pages}
            nextPage={nextPage}
            prevPage={prevPage}
            lastPage={lastPage}
            firstPage={firstPage}
         />
      </context.Provider >
   );
};

export default Dashboard;