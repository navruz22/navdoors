import React, { useEffect, useState } from 'react'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Buttons/Button'
import Api from "../../config/Api"
import DetailTable from '../../components/Tables/DetailTable'
import Modal from '../../components/Modals/Modal'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const DoorType = () => {

    const [data, setData] = useState({
        name: "",
        price: "",
        dobor_price: "",
        jamb_price: ""
    })

    const [modal, setModal] = useState(false)

    const clearData = () => {
        setData({
            name: "",
            price: "",
            dobor_price: "",
            jamb_price: ""
        })
    }

    // ============================================================================
    // ============================================================================

    const createHandler = async () => {
        try {
            const {data: res} = await Api.post('/doortype/create', {...data}) 
            setDatas([res, ...datas])
            clearData()
        } catch (error) {
            console.log(data);
        }
    }

    const updateHandler = async () => {
        try {
            const {data: res} = await Api.put(`/doortype/update`, {...data}) 
            setDatas([...datas].map(item => {
                if (item._id === res._id) {
                    item = {...res}
                }
                return item;
            }))
            clearData()
        } catch (error) {
            console.log(data);
        }
    }

    const deleteHandler = async () => {
        try {
            const {data: res} = await Api.delete(`/doortype/delete/${data?._id}`) 
            setDatas([...datas].filter(item => item._id !== res._id))
            setModal(false)
            clearData()
        } catch (error) {
            console.log(data);
        }
    }


    const checkData = () => {
        if (data?.name && data.price && data.dobor_price && data.jamb_price) {
            if (data?._id) {
                return updateHandler()
            } else {
                return createHandler()
            }
        }
    }

    
    // ============================================================================
    // ============================================================================

    const [datas, setDatas] = useState([])

    const getDatas = async () => {
        try {
            const { data } = await Api.get('/doortype/get')
            setDatas(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDatas()
    }, [])

    return (
        <div className='max-w-[1800px] mx-auto'>
            <div className='max-w-[1400px] mx-auto p-4'>
                <div className='px-4 mb-[50px]'>
                    <div>
                        <h1 className='text-[32px] font-bold text-center'>Eshik turi</h1>
                    </div>
                    <div className='mt-4 grid grid-cols-5 gap-4 ml-[150px]'>
                        <Input
                            label="Eshik turi"
                            type={'text'}
                            value={data?.name}
                            onChange={value => setData({ ...data, name: value })}
                            required={true}
                        />
                        <Input
                            label="Narxi"
                            type={'number'}
                            value={data?.price}
                            onChange={value => setData({ ...data, price: +value === 0 ? '' : +value })}
                            required={true}
                        />
                        <Input
                            label="Dobor narxi"
                            type={'number'}
                            value={data?.dobor_price}
                            onChange={value => setData({ ...data, dobor_price: +value === 0 ? '' : +value })}
                            required={true}
                        />
                        <Input
                            label="Nalichnik narxi"
                            type={'number'}
                            value={data?.jamb_price}
                            onChange={value => setData({ ...data, jamb_price: +value === 0 ? '' : +value })}
                            required={true}
                        />
                        <div className='self-end'>
                            <Button title={'Saqlash'} type={'primary'} onClick={checkData} />
                        </div>
                    </div>
                </div>
                <div className='mt-4 px-4'>
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
                                    <th class="text-[16px] px-6 py-1 font-medium">
                                        {data?.dobor_price}
                                    </th>
                                    <td class="text-[16px] px-6 py-1 font-medium">
                                        {data?.jamb_price}
                                    </td>
                                    <td class="px-6 py-1 flex justify-center gap-2">
                                    <button><FaEdit className='text-yellow-400' onClick={() => setData(data)} size={26}/></button>
                                    <button><MdDelete className='text-red-700' onClick={() => {
                                        setData(data)
                                        setModal(true)
                                    }} size={28}/></button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal isOpen={modal} handler={deleteHandler} closeModal={() => setModal(false)} />
        </div>
    )
}

export default DoorType