function convertOffsetSecondsToTimezone(offsetSeconds) {
    // Create a new Date object with the offset seconds.
    const date = new Date(offsetSeconds * 1000);
  
    // Get the timezone offset in minutes.
    const timezoneOffset = date.getTimezoneOffset();
  
    // Convert the timezone offset to a timezone string.
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
    // Return the timezone string.
    return timezone;
  }

  export default  convertOffsetSecondsToTimezone;