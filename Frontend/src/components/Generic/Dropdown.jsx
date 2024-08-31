import { useState } from "react";
const Dropdown = ({ label, options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="relative">
      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
        {label}
      </p>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="border placeholder-gray-400 focus:outline-none
        focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
        border-gray-300 rounded-md"
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.value + ", " + option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
