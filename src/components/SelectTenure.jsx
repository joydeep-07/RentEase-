import React, { useState } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";

const SelectTenure = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="w-full flex gap-3">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disablePast
          label="Start Date"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
        />

        <DatePicker
          disablePast
          label="End Date"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          minDate={startDate}
        />
      </LocalizationProvider>
    </div>
  );
};

export default SelectTenure;
