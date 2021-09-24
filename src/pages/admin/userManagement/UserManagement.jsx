import React, { useState, useEffect } from 'react';

import MuiTable from 'components/MuiTable/MuiTable';
import { UserManagementApi } from 'apis/adminManagementServices';

import { errorAlert } from 'config/sweetAlert';
import { successAlert } from 'config/sweetAlert';
import { userManagementTableStyle } from 'config/tableStyles';


const editable = (props) => ({
    onRowAdd: newData =>
        new Promise((resolve, reject) => {
            const dataList = [...props.data];
            dataList.push(newData);

            const dataUpdate = { ...newData, maNhom: "GP01" };
            props.managementService.addNewUser(dataUpdate)
                .then(() => {
                    successAlert('Thêm người dùng thành công'); 
                    props.setData(dataList); 
                    resolve()
                })
                .catch(() => {errorAlert(); reject()});
        })
    ,
    onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
            const dataList = [...props.data];
            dataList[oldData.tableData.id] = newData;

            const dataUpdate = { ...newData, maNhom: "GP01" };
            props.managementService.updateUser(dataUpdate)
                .then(() => {
                    successAlert('Cập nhật người dùng thành công'); 
                    props.setData(dataList); 
                    resolve()
                })
                .catch(() => {errorAlert(); reject()});
        })
    ,
    onRowDelete: oldData =>
        new Promise((resolve, reject) => {
            const index = oldData.tableData.id;
            const updatedRows = [...props.data];

            updatedRows.splice(index, 1);
            
            props.managementService.deleteUser(oldData)
                .then(() => {
                    successAlert('Xoá người dùng thành công'); 
                    props.setData(updatedRows); 
                    resolve()
                })
                .catch(() => {errorAlert(); reject()});
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
