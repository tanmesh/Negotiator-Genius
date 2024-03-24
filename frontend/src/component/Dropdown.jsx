import React, { useState } from 'react';

function Dropdown({ selectedNegotiatableTerms, negotiatableTerms }) {
    const [list, setList] = useState(negotiatableTerms);
    const [options, setOptions] = useState(selectedNegotiatableTerms);
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState('');

    const toggleDropdown = () => {
        setOpen(!open);
    };

    const handleOptionChange = (value) => {
        if (options.includes(value)) {
            setOptions(options.filter((option) => option !== value));
        } else {
            setOptions([...options, value]);
        }
    };

    return (
        <div className=" w-full max-w-xs relative">
            <div onClick={toggleDropdown} className="p-3 rounded-lg flex justify-between gap-2 w-full border border-neutral-300 cursor-pointer truncate h-12 bg-white">
                {options.length} parameters selected
                <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
            {open && (
                <div className="p-3 rounded-lg flex gap-3 w-full shadow-lg absolute flex-col bg-white mt-3">
                    {(filter === '' || list.some(option => option.toLowerCase().includes(filter.toLowerCase()))) ? (
                        <>
                            {list.map((option, index) => (
                                <div className="flex items-center">
                                    <input
                                        checked={options.includes(option)}
                                        onChange={() => handleOptionChange(option)}
                                        id={index}
                                        type="checkbox"
                                        value={option}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label htmlFor="george" className="ml-2 text-sm font-medium text-gray-900 flex-grow"> {option} </label>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p className="text-neutral-400 text-center font-bold text-2xl">-</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
