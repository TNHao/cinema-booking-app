import MaterialTable from 'material-table';
import React, { useState } from 'react';
import tableIcons from 'config/muiTableIcons';
import './_muiTable.scss';

export default function MuiTable(props) {
    return (
        <MaterialTable
            icons={tableIcons}
            title="Editable Preview"
            columns={props.columnStyle}
            data={props.data}
            options={{
                // Set actions column to the right most
                actionsColumnIndex: 99,
                draggable: false,
                tableLayout: "auto"
            }}
            editable={{
                onRowAdd: newData => {
                    const dataList = [...props.data];
                    dataList.push(newData);
                    props.setData(dataList);

                    const dataUpdate = { ...newData, maNhom: "GP01" };
                    return props.managementService.addNewData(dataUpdate);
                },
                onRowUpdate: (newData, oldData) => {
                    const dataList = [...props.data];
                    dataList[oldData.tableData.id] = newData;
                    props.setData(dataList);

                    const dataUpdate = { ...newData, maNhom: "GP01" };
                    return props.managementService.updateData(dataUpdate);
                },
                onRowDelete: oldData => {
                    const index = oldData.tableData.id;
                    const updatedRows = [...props.data];
                    
                    updatedRows.splice(index, 1);
                    props.setData(updatedRows)
                    
                    return props.managementService.deleteData(oldData);
                }
            }}
        />
    )
}
