import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const DetailTable = ({ datas = [], Edit, Delete }) => {
  return (

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 font-bold">
              №
            </th>
            <th scope="col" class="px-6 py-3 font-bold">
              Nomi
            </th>
            <th scope="col" class="px-6 py-3 font-bold">
              Narxi
            </th>
            <th scope="col" class="px-6 py-3 font-bold">

            </th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, key) =>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={key}>
              <th scope="row" class="text-[16px] px-6 py-1 font-medium">
                {key + 1}
              </th>
              <th class="text-[16px] px-6 py-1 font-medium">
                {data?.name}
              </th>
              <td class="text-[16px] px-6 py-1 font-medium">
                {data?.price}
              </td>
              <td class="px-6 py-1 flex justify-center gap-2">
                <button><FaEdit className='text-yellow-400' onClick={() => Edit(data)} size={26}/></button>
                <button><MdDelete className='text-red-700' onClick={() => Delete(data)} size={28}/></button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  )
}

export default DetailTable