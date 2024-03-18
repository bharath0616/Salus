import React from 'react';
import eventData from './json/events.json'; // Adjust the import path according to your file's location

export default function Report() {
  // eventData.events contains the array of event objects
  const { events } = eventData;

  return (
    <div className='mt-20'>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-4 bg-white dark:bg-gray-800">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">Event ID</th>
              <th scope="col" className="py-3 px-6">Address</th>
              <th scope="col" className="py-3 px-6">Timestamp</th>
              <th scope="col" className="py-3 px-6">Event Details</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.eventId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6">{event.eventId}</td>
                <td className="py-4 px-6">{event.address}</td>
                <td className="py-4 px-6">{event.timestamp}</td>
                <td className="py-4 px-6">{event.eventDetails}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
