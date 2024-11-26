import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

   // A helper function to set the hours and minutes of a date
   const setDateTime = (date, time) => {
    const [hours, minutes] = time.split(':');
    date.setHours(hours, minutes);
    return date;
  };

  const handleSubmit = () => {
      // Check if both start and end time and date are selected
      if (!selectedDate || !timeRange.startTime || !timeRange.endTime) {
        toast.error('Please select a date and both start and end time.');
        return;
      }

    const now = new Date(); // Get the current date and time

    // Create new Date objects for the start and end times of the unavailable period
    const startDateTime = setDateTime(new Date(selectedDate), timeRange.startTime); 
    const endDateTime = setDateTime(new Date(selectedDate), timeRange.endTime); 


    // This checks if the selected date and time are in the past
    if (startDateTime < now || endDateTime < now) {
      toast.error('Please select a date and time in the future.');
      return;
    }

    const selectedTimeRange = `${timeRange.startTime} - ${timeRange.endTime}`;
    const unavailableDatesArray = unavailableDates.join(', ');
    toast.success(`Unavailable Time: ${selectedTimeRange}\nUnavailable Dates: ${unavailableDatesArray}`);

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
      <ToastContainer /> {/* You can customize this further.*/}
    </div>
  );
};
export default AvailabilityForm;