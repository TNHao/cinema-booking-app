import React, { useState, useEffect } from 'react';
import MuiTable from 'components/MuiTable/MuiTable';
import { userManagementTableStyle } from 'config/tableStyles';
import { UserManagementApi } from 'apis/adminManagementServices';

const editable = (props) => ({
    onRowAdd: newData =>
        new Promise((resolve, reject) => {
            const dataList = [...props.data];
            dataList.push(newData);
            props.setData(dataList);

            const dataUpdate = { ...newData, maNhom: "GP01" };
            console.log('checked')
            props.managementService.addNewUser(dataUpdate)
                .then(() => resolve())
                .catch(() => reject());
        })
    ,
    onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
            const dataList = [...props.data];
            dataList[oldData.tableData.id] = newData;
            props.setData(dataList);

            const dataUpdate = { ...newData, maNhom: "GP01" };
            props.managementService.updateUser(dataUpdate)
                .then(() => resolve())
                .catch(() => reject());
        })
    ,
    onRowDelete: oldData =>
        new Promise((resolve, reject) => {
            const index = oldData.tableData.id;
            const updatedRows = [...props.data];

            updatedRows.splice(index, 1);
            props.setData(updatedRows)

            console.log("checked")
            props.managementService.deleteUser(oldData)
                .then(() => resolve())
                .catch(() => reject());
        })
})

const managementService = new UserManagementApi();
const columnStyle = userManagementTableStyle;

export default function UserManagement() {
    const [data, setData] = useState([]);

    useEffect(() => {
        managementService.fetchUserList().then(res => setData(res.data.content));
        // ĐỪNG XÓA DÒNG DƯỚI - cmt tắt cảnh báo thiếu dependancies của react
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
                title="Quản lý người dùng"
            />
        </div>
    )
}
