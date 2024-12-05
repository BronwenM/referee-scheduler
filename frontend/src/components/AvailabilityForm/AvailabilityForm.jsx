import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button/Button';
import Cookies from 'js-cookie';
import axios from 'axios';

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

   const setDateTime = (date, time) => {
    const [hours, minutes] = time.split(':');
    date.setHours(hours, minutes);
    return date;
  };
  const handleSubmit = async () => {
    const userId = Cookies.get('new_user_id');

    const startDateTime = setDateTime(new Date(selectedDate), timeRange.startTime);
    const endDateTime = setDateTime(new Date(selectedDate), timeRange.endTime);

    try {
      const response = await axios.post('/api/unavailabilities', { 
        official_id: userId, 
        week_day: selectedDate.getDay(),
        all_day: false,
        time_from: startDateTime.toISOString(), 
        time_to: endDateTime.toISOString(), 
        available_date: selectedDate.toISOString().split('T')[0]
      });
  
      toast.success('Unavailability updated successfully');
    } catch (error) {
      console.error('Error updating unavailability:', error);
      toast.error('Error updating unavailability');
    }
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
      <ToastContainer />
    </div>
  );
};
export default AvailabilityForm;