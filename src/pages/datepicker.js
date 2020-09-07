import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "@/styles/main.scss";

const Picker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="h-screen w-full bg-blue-500 flex items-center justify-center">
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    </div>
  );
};

export default Picker;
