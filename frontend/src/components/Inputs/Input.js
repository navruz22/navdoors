import React, { useState } from 'react'

const Input = ({label, type, onChange, value, required }) => {
    const gray = 'border-gray-300'
    const red = "border-red-500"
    const [border, setBorder] = useState(gray)
    return (
        <div className='w-full'>
            <label class="block mb-2 text-[12px] font-medium text-gray-900 dark:text-white">{label}</label>
            <input 
                type={type}
                className={`bg-white-50 border ${border} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                placeholder={label}
                value={value}
                onChange={e => onChange(e.target.value)}
                onBlur={() => (required && !value && setBorder(red)) || (required && value && setBorder(gray))}
            />
        </div>
    )
}

export default Input