import React from "react";
import "../Hero.css";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendarDate } from "react-icons/bs";
import DatePicker from "react-datepicker";

export const CustomDatePicker = ({ startDate, setStartDate }) => {
  return (
    <>
      <label className="inputt  flex items-center gap-2">
        <DatePicker
          closeOnScroll={true}
          toggleCalendarOnIconClick
          showIcon
          placeholderText="Select Date"
          selected={startDate}
          dateFormat="MMMM d, yyyy"
          onChange={(date) => setStartDate(date)}
          icon={
            <BsCalendarDate className=" bottom-[-20%] left-[-3%] cursor-pointer" />
          }
          className="calender "
        />
      </label>
    </>
  );
};
