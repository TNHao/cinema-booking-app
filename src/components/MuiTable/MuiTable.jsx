import React from 'react';
import MaterialTable from 'material-table';
import tableIcons from 'config/muiTableIcons';
import './_muiTable.scss';

export default function MuiTable(props) {
    return (
        <MaterialTable
            icons={tableIcons}
            title={props.title}
            columns={props.columnStyle}
            data={
                // (query) => {
                //     return props.managementService.fetchPaginationData(query.page + 1, query.pageSize)
                //         .then(res => Promise.resolve({
                //             data: res.data.content.items,
                //             page: res.data.content.currentPage - 1,
                //             totalCount: res.data.content.totalCount
                //         }));
                // }
                props.data
            }
            options={{
                // Set actions column to the right most
                actionsColumnIndex: 99,
                draggable: false,
                tableLayout: "auto"
            }}
            editable={ props.editable(props) }
        />
    )
}
