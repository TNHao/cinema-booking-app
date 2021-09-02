import React from 'react';
import './_dashboard.scss';
import Sidebar from 'components/Sidebar/Sidebar';
import MuiTable from 'components/MuiTable/MuiTable';

export default function Dashboard() {
    return (
        <div className="wrapper d-flex align-items-stretch">
            <Sidebar />        
            <div className="table mt-5">
                <MuiTable />
            </div>
        </div>
    )
}
