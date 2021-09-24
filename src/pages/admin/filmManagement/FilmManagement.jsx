import React, { useState, useEffect } from 'react';
import MuiTable from 'components/MuiTable/MuiTable';
import { filmManagementTableStyle } from 'config/tableStyles';
import { MovieManagementApi } from 'apis/adminManagementServices';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actFileUpload } from 'redux/actions/actFileUpload';
import moment from 'moment';
import axios from 'axios';
import { DOMAIN } from 'utils/constants/SettingSystems';
import { ACCESS_TOKEN } from 'utils/constants/SettingSystems';
import { successAlert } from 'config/sweetAlert';
import { errorAlert } from 'config/sweetAlert';

const columnStyle = filmManagementTableStyle;
const managementService = new MovieManagementApi();

const editable = (props) => ({
    onRowAdd: async newData => {
        const formData = new FormData();

        for (let key in newData) {
            formData.append(key, newData[key]);
        }

        let date = new Date(document.getElementById('datetime-local').value);
        date = moment(date).format('DD/MM/yyyy');

        //Vì form chỉ điền 1 vài trường nên dưới đây là default data
        formData.append('ngayKhoiChieu', date);
        formData.append('maNhom', 'GP01');
        formData.append('hot', true);
        formData.append('dangChieu', false);
        formData.append('sapChieu', false);
        formData.append('biDanh', newData['tenPhim']);

        if (!newData.moTa) formData.append('moTa', 'Mô tả mặc định');

        if (!props.fileUploaded) formData.append('hinhAnh', null);
        else
            await fetch(props.fileUploaded.result)
                .then(r => r.blob())
                .then(blobFile => {
                    let file = new File([blobFile], props.fileUploaded.name, { type: props.fileUploaded.type })
                    formData.append('hinhAnh', file, props.fileUploaded.name);
                    props.dispatch(actFileUpload(null));
                });

        // await axios({
        //     url: `${DOMAIN}/api/QuanLyPhim/ThemPhimUploadHinh`,
        //     method: 'POST',
        //     data: formData,
        //     headers: {
        //         'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
        //         'TokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjgiLCJIZXRIYW5TdHJpbmciOiIwNS8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDY0Mzg0MDAwMDAiLCJuYmYiOjE2MTc5ODc2MDAsImV4cCI6MTY0NjU4NjAwMH0.rmNHCCoHWfPP3VnrGmrmn3_CDUS9NnNwcEeBD_71ylk'
        //     }
        // })
        await props.managementService.addNewData(formData)
            .then(() => successAlert('Thêm phim thành công'))
            .catch(() => errorAlert());

        return props.managementService.fetchMovieList()
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
            if (key === "ngayKhoiChieu") {
                let date = new Date(newData[key]);
                date = moment(date).format('DD/MM/yyyy') + " " + moment(date).format('hh:mm:ss');
                formData.append(key, date);
                continue;
            }

            if (key === "hinhAnh") {
                if (!props.fileUploaded) formData.append('hinhAnh', null);
                else
                    await fetch(props.fileUploaded.result)
                        .then(r => r.blob())
                        .then(blobFile => {
                            let file = new File([blobFile], props.fileUploaded.name, { type: props.fileUploaded.type })
                            formData.append('hinhAnh', file, props.fileUploaded.name);
                            props.dispatch(actFileUpload(null));
                        });
                continue;
            }

            formData.append(key, newData[key]);
        }

        await props.managementService.updateMovie(formData)
            .then(() => successAlert('Cập nhật phim thành công'))
            .catch(() => errorAlert());

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

        return props.managementService.deleteData(oldData)
            .then(() => successAlert('Xóa phim thành công'))
            .catch(() => errorAlert());
    }
})

export default function FilmManagement() {
    const { fileUploaded } = useSelector(state => state.AdminReducer);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    useEffect(() => {
        managementService.fetchMovieList().then(res => setData(res.data.content));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="table mt-5 mb-3">
            <MuiTable
                columnStyle={columnStyle}
                data={data}
                setData={setData}
                managementService={managementService}
                editable={editable}
                title="Quản lý phim"
                fileUploaded={fileUploaded}
                dispatch={dispatch}
            />
        </div>
    )
}