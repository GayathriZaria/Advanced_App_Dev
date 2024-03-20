import React from 'react';
import { Outlet } from 'react-router-dom';
import Leftbar from '../components/Admin/Leftbar';
import TopBar from '../components/Admin/Topbar';
import TitleBar from '../components/Admin/Titlebar';

const AdminLayout = () => {
    return (
        <>
            <TitleBar/>
            <div className='m-0 p-0 flex flex-row h-[100vh] w-[100vw] overflow-hidden'>
                <Leftbar/>
                        <div className='w-[85vw] h-[95vh] flex flex-col p-2 gap-4'>
                            <Outlet />
                        </div>
            </div>
        </>
    );
};

export default AdminLayout;
