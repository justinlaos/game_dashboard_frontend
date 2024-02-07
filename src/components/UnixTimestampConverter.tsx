import React from 'react';

export const UnixTimestampConverter: React.FC<Number> = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds

    // Get the various components of the date
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is 0-indexed, so we add 1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`)
}
