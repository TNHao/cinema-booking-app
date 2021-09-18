import React, { useState, useEffect } from 'react';
import MuiTable from 'components/MuiTable/MuiTable';
import { filmManagementTableStyle } from 'config/tableStyles';
import { MovieManagementApi } from 'apis/adminManagementServices';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actFileUpload } from 'redux/actions/actFileUpload';

export default function FilmManagement() {
    const managementService = new MovieManagementApi();
    const { fileUploaded } = useSelector(state => state.AdminReducer);
    const dispatch = useDispatch();

    const editable = (props) => ({
        onRowAdd: async newData => {
            // const dataList = [...props.data];
            // dataList.push(newData);
            // props.setData(dataList);

            // const dataUpdate = { ...newData, maNhom: "GP01" };
            // return props.managementService.addNewData(dataUpdate);

            const formData = new FormData();

            for (let key in newData) {
                if (key !== "hinhAnh")
                    formData.append(key, newData[key]);
                else {
                    if (!fileUploaded) formData.append('hinhAnh', null);
                    else
                        await fetch(fileUploaded.result)
                            .then(r => r.blob())
                            .then(blobFile => {
                                let file = new File([blobFile], fileUploaded.name, { type: fileUploaded.type })
                                formData.append('hinhAnh', file, fileUploaded.name);
                                console.log("file: ", file);
                                dispatch(actFileUpload(null));
                            });
                }
            }

            console.log("testing");
            await props.managementService.addNewData(formData);

            return props.managementService.fetchData()
                .then(res => {
                    // const dataList = [...props.data];
                    // dataList.push(res.data.content);
                    // console.log(res.data.content);
                    props.setData(res.data.content);
                });
        },
        onRowUpdate: async (newData, oldData) => {
            const formData = new FormData();

            for (let key in newData) {
                if (key !== "hinhAnh")
                    formData.append(key, newData[key]);
                else {
                    if (!fileUploaded) formData.append('hinhAnh', null);
                    else
                        await fetch(fileUploaded.result)
                            .then(r => r.blob())
                            .then(blobFile => {
                                let file = new File([blobFile], fileUploaded.name, { type: fileUploaded.type })
                                formData.append('hinhAnh', file, fileUploaded.name);
                                console.log("file: ", file);
                                dispatch(actFileUpload(null));
                            });
                }
            }

            await props.managementService.updateData(formData);

            return props.managementService.fetchMovieDetail(newData.maPhim)
                .then(res => {
                    const dataList = [...props.data];
                    dataList[oldData.tableData.id] = res.data.content;
                    props.setData(dataList);
                });
        },
        onRowDelete: oldData => {
            const index = oldData.tableData.id;
            const updatedRows = [...props.data];

            updatedRows.splice(index, 1);
            props.setData(updatedRows)

            return props.managementService.deleteData(oldData);
        }
    })


    const columnStyle = filmManagementTableStyle;

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
