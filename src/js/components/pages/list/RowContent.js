import React from 'react';

import Link from '@commonReact/Link';
import useCustomContext from '@hooks/useCustomContext';

function RowContent() {
   const { header, text, link } = useCustomContext();

   return (
      <div className="table-content">
         {
            <React.Fragment>
               {link ? <Link /> : header}

               <small>{text}</small>
            </React.Fragment>
         }
      </div>
   );
}

export default RowContent;
