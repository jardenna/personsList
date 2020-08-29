/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */

import React from 'react';

import context from '@commonReact/context';
import RowContent from '@pages/list/RowContent';

export function TableConstants() {

  return ([
    {
      render: rowData => {
        const tableContext = { header: rowData.name1, text: rowData.email, link: rowData.edit_path, target: '_blank', title: `Go to ${rowData.edit_path}` };
        return (
          <context.Provider value={tableContext}>
            <RowContent text={rowData.email} link={rowData.edit_path} title={`Go to ${rowData.edit_path}`} />
          </context.Provider>
        );
      }
    }
  ]);
}

