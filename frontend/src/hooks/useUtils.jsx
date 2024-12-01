import React from 'react'

const useUtils = () => {
  /**
   * 
   * @param {string} dateString - date string in the format YYYY-MM-DD hh:mm:ss.ms
   * @returns {object} returns an object with parsed fields for year, day, month, and 12hr time AM/PM 
   */
  const convertDateString = (dateString) => {
    const date = new Date(dateString);
    const isAM = date.getHours() <= 12;
    const monthsArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return {
      year: date.getFullYear(),
      day: date.getDate(),
      month: monthsArr[date.getMonth()],
      time: isAM
        ? `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')} AM`
        : `${date.getHours() - 12}:${date.getMinutes().toString().padStart(2, '0')} PM`,
    };
  };

  /**
   * 
   * @param {string} str
   * @returns {string} input with the first letter of each word capitalized
   */
  const toTitleCase = (str) => {
    let strArr = str.trim().split(' ').map(word => 
       word.toLowerCase().replace(word.charAt(0), word.charAt(0).toUpperCase())
    );

    return strArr.join(' ');
  }

  return {convertDateString, toTitleCase}
}

export default useUtils