import React from 'react';
import useCustomContext from '@hooks/useCustomContext';

function Row({ As, item }) {
   const { cols } = useCustomContext();

   return (
      <tr>
         {cols.map((col, index) => {
            const content = !item ? col.title : col.render(item);
            return (
               <As key={index}>{content}</As>
            );
         })}
      </tr>
   );
}

export default Row;


Row.defaultProps = {
   As: 'td'
};