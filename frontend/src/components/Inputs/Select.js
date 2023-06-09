import React from 'react'

const Select = ({ label, value, options, onChange }) => {
    return (
        <div className='w-full'>
            <label class="block mb-2 text-[12px] font-medium text-gray-900 dark:text-white">{label}</label>
            <select
                value={value}
                onChange={e => onChange(e.target.value)}
                class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected></option>
                {options.map((option, key) =>
                    <option key={key} value={option._id}>{option.name}</option>
                )}
            </select>
        </div>
    )
}

export default Select