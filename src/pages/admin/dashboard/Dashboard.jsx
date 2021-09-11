import React, { useState } from 'react';
import './_dashboard.scss';
import Sidebar from 'components/Sidebar/Sidebar';
import MuiTable from 'components/MuiTable/MuiTable';
import { useParams } from 'react-router';
import { filmManagementTableStyle, userManagementTableStyle } from 'config/tableStyles';
import { useEffect } from 'react';
import { MovieManagement, UserManagement } from 'apis/adminManagementServices';

export default function Dashboard() {
    const param = useParams().page;

    const [data, setData] = useState([]);

    let managementService = null;
    let columnStyle = [];

    switch (param) {
        case "quan-ly-nguoi-dung":
            managementService = new UserManagement();
            columnStyle = userManagementTableStyle;
            break;

        case "quan-ly-phim":
            managementService = new MovieManagement();
            columnStyle = filmManagementTableStyle;
            break;

        default:
            break;
    }

    useEffect(() => {
        managementService.fetchData().then(res => setData(res.data.content));

        return () => {
            setData([]);
            columnStyle = []; 
            managementService = null;
        }
    }, [param])

    return (
        <div className="wrapper d-flex align-items-stretch">
            <Sidebar />
            <div className="table mt-5">
                <MuiTable 
                    columnStyle={columnStyle}
                    data={data} 
                    setData={setData} 
                    managementService={managementService}
                />
            </div>
        </div>
    )
}
