import React from 'react';
import './_dashboard.scss';
import Sidebar from 'components/Sidebar/Sidebar';
import Table from 'components/Table/Table';

export default function Dashboard() {
    return (
        <div className="wrapper d-flex align-items-stretch">
            <Sidebar />        
            <div className="table mt-3">
                <Table />
            </div>
        </div>
    )
}
