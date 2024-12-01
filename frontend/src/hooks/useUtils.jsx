import React from "react";

const useUtils = () => {
  /**
   *
   * @param {string} dateString - date string in the format YYYY-MM-DD hh:mm:ss.ms
   * @returns {object} returns an object with parsed fields for year, day, month, and 12hr time AM/PM
   */
  const convertDateString = (dateString) => {
    const date = new Date(dateString);

    const dateOptions = {
      month: "long",
      day: "2-digit",
      year: "numeric"
    };

    const timeOptions = {
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
    };

    const dateArray = new Intl.DateTimeFormat('en-GB', dateOptions).format(date).split(' ');
    const time = new Intl.DateTimeFormat('en-GB', timeOptions).format(date).toUpperCase()

    return {
      year: dateArray[2],
      day: dateArray[0],
      month: dateArray[1],
      time: time,
      full: new Intl.DateTimeFormat('en-GB', {...dateOptions, ...timeOptions}).format(date)
    }
  };

  /**
   *
   * @param {string} str
   * @returns {string} input with the first letter of each word capitalized
   */
  const toTitleCase = (str) => {
    let strArr = str
      .trim()
      .split(" ")
      .map((word) =>
        word.toLowerCase().replace(word.charAt(0), word.charAt(0).toUpperCase())
      );

    return strArr.join(" ");
  };

  return { convertDateString, toTitleCase };
};

export default useUtils;
