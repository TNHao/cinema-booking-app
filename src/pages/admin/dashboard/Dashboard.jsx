import React from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import { useParams } from 'react-router';
import FilmManagement from '../filmManagement/FilmManagement';
import UserManagement from '../userManagement/UserManagement';
import MovieSchedule from '../movieSchedule/MovieSchedule';
import './_dashboard.scss';

export default function Dashboard() {
    const param = useParams().page;

    return (
        <div className="wrapper d-flex align-items-stretch">
            <Sidebar />
            {param === "quan-ly-phim" && <FilmManagement />}
            {param === "quan-ly-nguoi-dung" && <UserManagement />}
            {param === "quan-ly-lich-chieu" && <MovieSchedule />}
        </div>
    )
}
