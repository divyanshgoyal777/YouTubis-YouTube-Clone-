import React, { useState } from 'react';
import settingssvg from "/src/assets/svg/settings.svg"

const Settings = () => {
  const [fontSize, setFontSize] = useState('medium');

  const handleFontSizeChange = (e) => {
    const selectedFontSize = e.target.value;
    setFontSize(selectedFontSize);
    document.documentElement.style.fontSize = selectedFontSize;
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 text-white">
      <div className='flex items-center gap-2 mb-4'>
        <img className='invert border rounded-full p-3 bg-gray-400' width="70px" src={settingssvg} alt="Settings" />
        <h2 className="text-4xl font-bold">Settings</h2>
    </div>
      <div className="mb-4">
        <label htmlFor="fontSize" className="block mb-2">
          Font Size
        </label>
        <select
          id="fontSize"
          value={fontSize}
          onChange={handleFontSizeChange}
          className="w-full px-3 py-2 border rounded-lg bg-custom-dark hover:cursor-pointer outline-none"
        >
          <option value="small">Small</option>
          <option value="medium">Normal</option>
          <option value="large">Large</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
