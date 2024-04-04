
import React from 'react'
import { Outlet } from 'react-router-dom'
import SBar from './SBar'








const DashboardLayout = () => {
    return (

        <div className='flex gap-4 flex-col md:flex-row'>
         <SBar/>
            <Outlet />
        </div>
    )
}

export default DashboardLayout