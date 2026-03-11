import React from 'react'
import AdminNav from '../components/AdminNav'
import AdminLogout from '../admin/AdminLogout';

const SellerDashboard = () => {
  return (
    <>
      <AdminNav />
      <div className="flex flex-col justify-center items-center py-20 w-full">
        <h1 className="py-15 uppercase text-center text-[var(--text-muted)] text-2xl">
          All Orders will be visible here
        </h1>

        <AdminLogout />
      </div>
    </>
  );
}

export default SellerDashboard