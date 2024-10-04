function getCurrentTime() {
  const date = new Date();
  return {
    unix: date.getTime(),
    utc: date.toUTCString(),
  };
}

function parseAndFormatDate(dateParam) {
  let date;

  if (!isNaN(dateParam) && /^\d+$/.test(dateParam)) {
    date = new Date(parseInt(dateParam));
  } else {
    date = new Date(dateParam);
  }

  if (isNaN(date.getTime())) {
    return { error: "Invalid Date" };
  } else {
    return {
      unix: date.getTime(),
      utc: date.toUTCString(),
    };
  }
}

module.exports = { getCurrentTime, parseAndFormatDate }