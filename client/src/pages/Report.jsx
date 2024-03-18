import React, { useEffect, useState } from 'react';

export default function Report() {
  const [logs, setLogs] = useState(null); // Initialize to null

  useEffect(() => {
    fetchLogs();
    const interval = setInterval(fetchLogs, 5000); // Polling every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await fetch('/api/eventLogs');
      const data = await response.json();
      if (Array.isArray(data)) {
        setLogs(data);
      } else {
        console.error('Data is not an array', data);
        setLogs([]); // Set to empty array if data is not as expected
      }
    } catch (error) {
      console.error('Failed to fetch logs', error);
      setLogs([]); // Set to empty array in case of fetch error
    }
  };

  return (
    <div className='mt-20'> 
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">Event ID</th>
              <th scope="col" className="py-3 px-6">Address</th> {/* Camera ID replaced by Address */}
              <th scope="col" className="py-3 px-6">Timestamp</th>
              <th scope="col" className="py-3 px-6">Event Details</th>
            </tr>
          </thead>
          <tbody>
            {logs && logs.map((log) => (
              <tr key={log.eventId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6">{log.eventId}</td>
                <td className="py-4 px-6">{log.address}</td> {/* Displaying address */}
                <td className="py-4 px-6">{new Date(log.timestamp).toLocaleString()}</td>
                <td className="py-4 px-6">{log.eventDetails}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
