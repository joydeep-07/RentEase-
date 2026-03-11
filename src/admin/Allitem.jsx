import React from "react";
import AdminNav from "../admin/AdminNav";
import { data } from "../utils/data";
import AdminItemCards from "./AdminItemCards";

const Allitem = () => {
  return (
    <div>
      <AdminNav />

      <div className="p-6 md:px-15">
        <AdminItemCards items={data} />
      </div>
    </div>
  );
};

export default Allitem;
