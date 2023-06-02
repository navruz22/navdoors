import React, { useEffect, useState } from 'react'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Buttons/Button'
import Api from "../../config/Api"
import DetailTable from '../../components/Tables/DetailTable'
import Modal from '../../components/Modals/Modal'

const Lock = () => {

    const [data, setData] = useState({
        name: "",
        price: ""
    })

    const [modal, setModal] = useState(false)

    const clearData = () => {
        setData({
            name: "",
            price: ""
        })
    }

    // ============================================================================
    // ============================================================================

    const createHandler = async () => {
        try {
            const { data: res } = await Api.post('/lock/create', { ...data })
            setDatas([res, ...datas])
            clearData()
        } catch (error) {
            console.log(data);
        }
    }

    const updateHandler = async () => {
        try {
            const { data: res } = await Api.put(`/lock/update`, { ...data })
            setDatas([...datas].map(item => {
                if (item._id === res._id) {
                    item = { ...res }
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
            const { data: res } = await Api.delete(`/lock/delete/${data?._id}`)
            setDatas([...datas].filter(item => item._id !== res._id))
            setModal(false)
            clearData()
        } catch (error) {
            console.log(data);
        }
    }


    const checkData = () => {
        if (data?.name && data.price) {
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
            const { data } = await Api.get('/lock/get')
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
                        <h1 className='text-[32px] font-bold text-center'>Zamok</h1>
                    </div>
                    <div className='mt-4 grid grid-cols-3 gap-4 ml-[150px]'>
                        <Input
                            label="Zamok"
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
                        <div className='self-end'>
                            <Button title={'Saqlash'} type={'primary'} onClick={checkData} />
                        </div>
                    </div>
                </div>
                <div className='mt-4 px-4'>
                    <DetailTable
                        datas={datas}
                        Edit={e => setData(e)}
                        Delete={e => {
                            setData(e)
                            setModal(true)
                        }}
                    />
                </div>
            </div>
            <Modal isOpen={modal} handler={deleteHandler} closeModal={() => setModal(false)} />
        </div>
    )
}

export default Lock
