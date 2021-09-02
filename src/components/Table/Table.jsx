import React, { useState, useCallback, useMemo   } from 'react';
import DataTable from 'react-data-table-component';

export default function Table() {
    const handleClick = (id) => {
        const ele = document.getElementById(id); 
        const temp = ele.innerHTML; 

        ele.innerHTML =  "sdjkb";
    }

    const columns = [
        {
            name: 'Tên phim',
            selector: row => row.tenPhim,
		    sortable: true,
        },
        {
            name: 'Trailer',
            cell: row => (
                <a href={row.trailer} target="_blank" rel="noopener noreferrer">
                    Watch it on Youtube
                </a>
            )
        },
        {
            name: 'Hình ảnh',
            cell: row => <img height="84px" width="56px" alt={row.tenPhim} src={row.hinhAnh} />,
        },
        {
            name: 'Mô tả',
            selector: row => `${row.moTa.slice(0, 60)}...`,
		    wrap: true,
        },
        {
            name: 'Ngày khởi chiếu',
            selector: row => row.ngayKhoiChieu,
            sortable: true,
        },
        {
            name: 'Đánh giá',
            selector: row => row.danhGia,
            sortable: true,
        },
        {
            name: 'Test button',
            button: true,
            cell: row => <button className="btn btn-info" onClick={() => {handleClick(`row-${row.id}`)}}>Edit</button>,
        }
    ];
    
    const tableDataItems = [
        {
            id: 15,
            tenPhim: 'Beetlejuice',
            trailer: "https://www.youtube.com/embed/u8ZsUivELbs",
            hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/red-dead-redemtion-2_gp01.jpg", 
            moTa: "In the near future, a drone pilot sent into a war zone finds himself paired up with a top-secret android officer on a mission to stop a nuclear attack.",
            ngayKhoiChieu: "2021-09-01T12:00:23.02",
            danhGia: 10,
        },
        {
            id: 2,
            tenPhim: 'Beetlejuice',
            trailer: '1988',
            hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/red-dead-redemtion-2_gp01.jpg", 
            moTa: "In the near future, a drone pilot sent into a war zone finds himself paired up with a top-secret android officer on a mission to stop a nuclear attack.",
            ngayKhoiChieu: "2021-09-01T12:00:23.02",
            danhGia: 10,
        },
        {
            id: 3,
            tenPhim: 'Beetlejuice',
            trailer: '1988',
            hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/red-dead-redemtion-2_gp01.jpg", 
            moTa: "In the near future, a drone pilot sent into a war zone finds himself paired up with a top-secret android officer on a mission to stop a nuclear attack.",
            ngayKhoiChieu: "2021-09-01T12:00:23.02",
            danhGia: 10,
        },
        {
            id: 4,
            tenPhim: 'Beetlejuice',
            trailer: '1988',
            hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/red-dead-redemtion-2_gp01.jpg", 
            moTa: "In the near future, a drone pilot sent into a war zone finds himself paired up with a top-secret android officer on a mission to stop a nuclear attack.",
            ngayKhoiChieu: "2021-09-01T12:00:23.02",
            danhGia: 10,
        },
        {
            id: 5,
            tenPhim: 'Beetlejuice',
            trailer: '1988',
            hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/red-dead-redemtion-2_gp01.jpg", 
            moTa: "In the near future, a drone pilot sent into a war zone finds himself paired up with a top-secret android officer on a mission to stop a nuclear attack.",
            ngayKhoiChieu: "2021-09-01T12:00:23.02",
            danhGia: 10,
        },
        {
            id: 6,
            tenPhim: 'Beetlejuice',
            trailer: '1988',
            hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/red-dead-redemtion-2_gp01.jpg", 
            moTa: "In the near future, a drone pilot sent into a war zone finds himself paired up with a top-secret android officer on a mission to stop a nuclear attack.",
            ngayKhoiChieu: "2021-09-01T12:00:23.02",
            danhGia: 10,
        },
    ]

    const [selectedRows, setSelectedRows] = useState([]);
	const [toggleCleared, setToggleCleared] = useState(false);
	const [data, setData] = useState(tableDataItems);

	const handleRowSelected = useCallback(state => {
		setSelectedRows(state.selectedRows);
	}, []);

	const contextActions = useMemo(() => {
		const handleDelete = () => {
			
			if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.length} items?`)) {
				setToggleCleared(!toggleCleared);
				// setData(differenceBy(data, selectedRows, 'title'));
                // Delete data here
			}
		};
        
		return (
			<button className="btn btn-danger" key="delete" onClick={handleDelete} style={{ backgroundColor: 'red' }}>
				Delete
			</button>
		);
	}, [data, selectedRows, toggleCleared]);

    return (
        <DataTable
            title="Quản lý phim"
            columns={columns}
            data={data}
            pagination 
            highlightOnHover
            selectableRows
            contextActions={contextActions}
            onSelectedRowsChange={handleRowSelected}
			clearSelectedRows={toggleCleared}
        />
    )
}
