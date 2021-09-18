import React, { useState, useEffect } from 'react';
import MuiTable from 'components/MuiTable/MuiTable';
import { userManagementTableStyle } from 'config/tableStyles';
import { UserManagementApi } from 'apis/adminManagementServices';

const editable = (props) => ({
    onRowAdd: newData => {
        const dataList = [...props.data];
        dataList.push(newData);
        props.setData(dataList);

        const dataUpdate = { ...newData, maNhom: "GP01" };
        return props.managementService.addNewData(dataUpdate);
    },
    onRowUpdate: (newData, oldData) => {
        console.log(newData);

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
})

export default function UserManagement() {
    const managementService = new UserManagementApi();
    const columnStyle = userManagementTableStyle;

    const [data, setData] = useState([]);

    useEffect(() => {
        managementService.fetchData().then(res => setData(res.data.content));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="table mt-5">
            <MuiTable
                columnStyle={columnStyle}
                data={data}
                setData={setData}
                managementService={managementService}
                editable={editable}
            />
        </div>
    )
}
