import React from 'react';
import reportsvg from "/src/assets/svg/report.svg"

const Report = () => {
  const reports = [
    { id: 1, title: 'Report 1', date: '2024-05-01', description: 'This is the first report.' },
    { id: 2, title: 'Report 2', date: '2024-05-12', description: 'This is the second report.' },
    { id: 3, title: 'Report 3', date: '2024-06-29', description: 'This is the third report.' }
  ];

  return (
    <div className="max-w-screen-lg mx-auto p-4 text-white">
      <div className='flex items-center gap-2 mb-4'>
        <img className='invert border rounded-full p-3 bg-gray-400' width="70px" src={reportsvg} alt="Report" />
        <h2 className="text-4xl font-bold">Report History</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {reports.map(report => (
          <div key={report.id} className="py-2">
            <h3 className="text-lg font-semibold">{report.title}</h3>
            <p className="text-sm text-gray-500">Date: {report.date}</p>
            <p className="mt-1">{report.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
