import React from 'react';
import notificationsData from './json/notifications.json'; // Adjust path as necessary

export default function Alert() {
  // Directly using imported data
  const notifications = notificationsData;

  // Emoji for danger icon
  const dangerIcon = "⚠️"; // You can replace this with any icon from an icon library

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full bg-gray-900 p-12 rounded-lg shadow-lg"> 
        <h2 className="text-3xl font-bold mb-6 text-white">Notifications</h2> 
        {notifications.map(notification => (
          <div key={notification.id} className="mb-6 flex items-start">
            <span className="text-red-500 text-xl mr-2">{dangerIcon}</span> {/* Adjust the styling as needed */}
            <div>
              <p className="text-gray-300 text-lg">{`${notification.message} "${notification.address}"`}</p>
              <p className="text-gray-500 text-base mt-2">{formatTimestamp(notification.timestamp)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString('en-US', {
    month: 'long', 
    day: '2-digit', 
    year: 'numeric', 
    hour: 'numeric', 
    minute: '2-digit', 
    hour12: true 
  });
};
