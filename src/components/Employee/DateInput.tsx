import React, { useState } from 'react';
import { TextField, Button, Snackbar } from '@material-ui/core';

const ANNUAL_LEAVE_DAYS = 30;



const DateInput = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [remainingDays, setRemainingDays] = useState<number>(ANNUAL_LEAVE_DAYS);
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    setStartDate(date);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    setEndDate(date);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const newRemainingDays = remainingDays - diffDays;
      if (newRemainingDays < 0) {
        setNotificationOpen(true);
      } else {
        setRemainingDays(newRemainingDays);
        setStartDate(null);
        setEndDate(null);
      }
    }
  };

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <TextField
        id="startDate"
        label="Start Date"
        type="date"
        variant='outlined'
        value={startDate ? startDate.toISOString().substr(0, 10) : ''}
        onChange={handleStartDateChange}
      />
      <br />
      <TextField
        id="endDate"
        label="End Date"
        type="date"
        variant='outlined'
        value={endDate ? endDate.toISOString().substr(0, 10) : ''}
        onChange={handleEndDateChange}
   
      />
      <br />
      <Button variant="contained" color="primary" type="submit">
        Request Leave
      </Button>
      <br />
      <p>Remaining Days of Leave: {remainingDays}</p>
      <Snackbar
        open={notificationOpen}
        autoHideDuration={6000}
        onClose={handleNotificationClose}
        message="You do not have enough remaining leave days"
      />
    </form>
  );
};

export default DateInput;