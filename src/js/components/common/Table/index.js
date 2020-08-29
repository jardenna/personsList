import React from 'react';

import Row from '@commonReact/Table/Row';

import useCustomContext from '@hooks/useCustomContext';

function Table() {
    const { data, cols } = useCustomContext();

    return (
        <table>
            <thead>
                <Row As='th' />
            </thead>
            <tbody>
                {data.length > 0 ? data.map((item, index) => (
                    <Row key={index} item={item} />

                )) : <tr>
                        <td colSpan={cols.length}>Nothing was found!</td>
                    </tr>
                }
            </tbody>
        </table>

    );
}

export default Table;