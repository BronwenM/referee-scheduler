import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div className="calendar">
      <ReactCalendar
        onChange={handleDateChange}
        value={date}
      />
    </div>
  );
};

export default CalendarComponent;