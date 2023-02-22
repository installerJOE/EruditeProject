export const API = {
  BASE_URL: 'https://erudite.igbolibrary.co/api'
}

export const getConvertedTime = (time) => {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { 
      time = time.slice(1);
      time[3] = +time[0] < 12 ? 'AM' : 'PM';
      time[0] = +time[0] % 12 || 12;
    }
    return time.join('');
}

export const getTimeFromTimeStamp = (timestamp) => {
  const hour = timestamp.getHours();
  const minute = timestamp.getMinutes();

  const convertedHour = hour < 10 ? '0' + hour : hour
  const convertedMin = minute < 10 ? '0' + minute : minute

  return `${convertedHour}:${convertedMin}`
}