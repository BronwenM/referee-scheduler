import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from '../Button/Button';

const AvailabilityForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeRange, setTimeRange] = useState({ startTime: '', endTime: '' });
  const [unavailableDates, setUnavailableDates] = useState([]); 

  const handleTileClick = (date) => {
    const dateStr = date.toDateString();
    let UnavailableDatesArray = [...unavailableDates];

    if (UnavailableDatesArray.includes(dateStr)) {
      UnavailableDatesArray = UnavailableDatesArray.filter(date => date !== dateStr);
    } else {
      UnavailableDatesArray.push(dateStr);
    }

    setUnavailableDates(UnavailableDatesArray);
  };

  const handleSubmit = () => {
    if (!timeRange.startTime || !timeRange.endTime) {
      alert('Please select both start and end times.');
      return;
    }

    const selectedTimeRange = `${timeRange.startTime} - ${timeRange.endTime}`;
    const unavailableDatesArray = unavailableDates.join(', ');
    alert(`Unavailable Time: ${selectedTimeRange}\nUnavailable Dates: ${unavailableDatesArray}`);

    setSelectedDate(new Date());
    setTimeRange({ startTime: '', endTime: '' });
    setUnavailableDates([]);
  };

  return (
    <div>
      <ReactCalendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date, view }) => view === 'month' && (
          <div>
            <input
              type="checkbox"
              checked={unavailableDates.includes(date.toDateString())}
              onChange={() => handleTileClick(date)}
            />
          </div>
        )}
      />
      <div>
        <label>From:</label>
        <input
           type="time"
           value={timeRange.startTime}
           onChange={(e) => setTimeRange({ ...timeRange, startTime: e.target.value })}
        />
      </div>
      <div>
        <label>To:</label>
        <input
          type="time"
          value={timeRange.endTime}
          onChange={(e) => setTimeRange({ ...timeRange, endTime: e.target.value })}
        />
      </div>
      <Button
        handle={handleSubmit}
        name="Submit"
        className="primary" 
      />
    </div>
  );
};
export default AvailabilityForm;