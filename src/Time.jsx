import React from "react";

export default function Time({ dt, timezone }) {
  const localTimeStamp = (dt + timezone) * 1000;
  const date = new Date(localTimeStamp);

  let hour = date.getUTCHours();
  let minute = date.getUTCMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getUTCDay()];

  if (hour < 10) hour = `0${hour}`;
  if (minute < 10) minute = `0${minute}`;

  const localTime = `${day} ${hour}:${minute}`;

  return <p className="text-md mr-1">{localTime}</p>;
}
