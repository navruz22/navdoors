import React, { useEffect, useState } from 'react'
import Input from '../../components/Inputs/Input'
import Api from "../../config/Api"
import Select from '../../components/Inputs/Select'
import Button from '../../components/Buttons/Button'
import { FaCopy } from "react-icons/fa"

const Sale = () => {

    const [depthes, setDepthes] = useState([])
    const [dobors, setDobors] = useState([])
    const [framogFigures, setFramogFigures] = useState([])
    const [framogTypes, setFramogTypes] = useState([])
    const [jumbs, setJumbs] = useState([])
    const [layers, setLayers] = useState([])
    const [locks, setLocks] = useState([])
    const [ornamentTypes, setOrnamentTypes] = useState([])
    const [doortypes, setDoortypes] = useState([])
    const [clients, setClients] = useState([])

    const [order, setOrder] = useState({
        door_type_id: null,
        fullname: "",
        deal: "",
        phone_number: "+998",
        prepayment: "",
        deadline: "",
        contract_price: "",
        prepayment: "",
        doors: [
            {
                width: '',
                height: '',
                count: '',
                l_p: null,
                depth: null,
                box_size: '',
                dobor: null,
                jumb: null,
                layer: null,
                doorstep: false,
                ornament_type_history_id: null,
                lock_history_id: null,
                framog_type_history_id: null,
                framog_figure_history_id: null,
            }
        ]
    })

    const changeDoorDetail = (value, ind, property) => {
        const doors = [...order.doors].map((door, index) => {
            if (index === ind) {
                door[property] = value
            }
            return { ...door };
        })
        setOrder({ ...order, doors: [...doors] })
    }

    const addRow = () => {
        const doors = [...order.doors, {
            width: '',
            height: '',
            count: '',
            l_p: null,
            depth: null,
            box_size: '',
            dobor: null,
            layer: null,
            doorstep: false,
            ornament_type_history_id: null,
            lock_history_id: null,
            framog_type_history_id: null,
            framog_figure_history_id: null,
        }]

        const neworder = { ...order, doors: doors }
        setOrder(neworder)
    }

    const copyRow = (key) => {
        const door = [...order.doors].filter((door, ind) => ind === key)
        const doors = [...order.doors, ...door]
        const neworder = { ...order, doors: [...doors] }
        setOrder(neworder)
    }

    const deleteRow = (key) => {
        const doors = [...order.doors].filter((door, ind) => ind !== key)
        const neworder = { ...order, doors: [...doors] }
        setOrder(neworder)
    }

    const onChangeNumber = (value, key, property) => {
        return changeDoorDetail(+value === 0 ? '' : +value, key, property)
    }

    //=============================================================
    //=============================================================

    //=============================================================
    //=============================================================

    const getData = async (url, setState) => {
        try {
            const { data } = await Api.get(url)
            setState(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData('/doortype/get', setDoortypes)
        getData('/depth/get', setDepthes)
        getData('/dobor/get', setDobors)
        getData('/layer/get', setLayers)
        getData('/ornament_figure/get', setOrnamentTypes)
        getData('/lock/get', setLocks)
        getData('/framog_type/get', setFramogTypes)
        getData('/framog_figure/get', setFramogFigures)
        getData('/jamb/get', setJumbs)
        getData('/client/get', setClients)
    }, [])

    return (
        <div className='max-w-[1800px] mx-auto'>
            <div className='w-full p-4'>
                <h2>Yaratish</h2>
            </div>
            <div className='w-full p-4 grid grid-cols-4 gap-2'>
                <div>
                    <Select
                        label={'Eshik turi'}
                        value={order?.door_type_id}
                        options={doortypes}
                        onChange={value => setOrder({ ...order, door_type_id: value })}
                    />
                </div>
                <div>
                    <div className='w-full'>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mijoz</label>
                        <select
                            value={order?.client}
                            onChange={e => setOrder({ ...order, client: e.target.value })}
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected></option>
                            {clients.map((client, key) =>
                                <option key={key} value={client?._id}>{client?.fullname}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div>
                    <Input
                        label="Shartnoma"
                        type='text'
                        value={order?.deal}
                        onChange={value => setOrder({ ...order, deal: value })}
                    />
                </div>
            </div>
            <div className='w-full p-4'>
                {order.doors.map((door, key) =>
                    <div className='flex gap-2'>
                        <Input
                            label="Bo'yi"
                            type='number'
                            value={door?.height}
                            onChange={value => onChangeNumber(value, key, 'height')}
                        />
                        <Input
                            label="Eni"
                            type='number'
                            value={door?.width}
                            onChange={value => onChangeNumber(value, key, 'width')}
                        />
                        <Input
                            label="Soni"
                            type='number'
                            value={door?.count}
                            onChange={value => onChangeNumber(value, key, 'count')}
                        />
                        <Select
                            value={order?.l_p}
                            label="L-P"
                            options={[
                                {
                                    id: 'l',
                                    name: "L"
                                },
                                {
                                    id: 'p',
                                    name: "P"
                                }
                            ]}
                            onChange={value => changeDoorDetail(value, key, 'l_p')}
                        />
                        <Select
                            value={door?.depth}
                            label="Kar. qalinligi"
                            options={depthes}
                            onChange={value => changeDoorDetail(value, key, 'depth')}
                        />
                        <Input
                            label="Kar. razmer"
                            type='number'
                            value={door?.box_size}
                            onChange={value => onChangeNumber(value, key, 'box_size')}
                        />
                        <Select
                            value={door?.dobor}
                            label="Dobor"
                            options={dobors}
                            onChange={value => changeDoorDetail(value, key, 'dobor')}
                        />
                        <Select
                            value={door?.layer}
                            label="Tabaqaligi"
                            options={layers}
                            onChange={value => changeDoorDetail(value, key, 'layer')}
                        />
                        <Select
                            value={door?.porog}
                            label="Porog"
                            options={[
                                {
                                    id: "bez",
                                    name: "Bez"
                                },
                                {
                                    id: "parogli",
                                    name: "Parogli"
                                }
                            ]}
                            onChange={value => changeDoorDetail(value, key, 'porog')}
                        />
                        <Select
                            value={door?.ornament_type_history_id}
                            label="Naqsh shakli"
                            options={ornamentTypes}
                            onChange={value => changeDoorDetail(value, key, 'ornament_type_history_id')}
                        />
                        <Select
                            value={door?.lock}
                            label="Zamok"
                            options={locks}
                            onChange={value => changeDoorDetail(value, key, 'lock')}
                        />
                        <Select
                            value={door?.framog_type_history_id}
                            label="Fr. turi"
                            options={framogTypes}
                            onChange={value => changeDoorDetail(value, key, 'framog_type_history_id')}
                        />
                        <Select
                            value={door?.framog_figure_history_id}
                            label="Fr. shakli"
                            options={framogFigures}
                            onChange={value => changeDoorDetail(value, key, 'framog_figure_history_id')}
                        />
                        <Select
                            value={door?.jumb}
                            label="Nalichnik"
                            options={jumbs}
                            onChange={value => changeDoorDetail(value, key, 'jumb')}
                        />
                        <Input
                            label="Naqsh modeli"
                            type='text'
                            value={door?.ornament_model}
                            onChange={value => changeDoorDetail(value, key, 'ornament_model')}
                        />
                        <Input
                            label="Eshik rangi"
                            type='text'
                            value={door?.color}
                            onChange={value => changeDoorDetail(value, key, 'color')}
                        />
                        <div className='flex items-end'>
                            <Button type={'green'} title={<FaCopy />} onClick={() => copyRow(key)} />
                            {key === 0 && <Button type={'primary'} title={'+'} onClick={() => addRow()} />}
                            {key > 0 && <Button type={'red'} title={'X'} onClick={() => deleteRow(key)} />}
                        </div>
                    </div>
                )}
            </div>
            <div className='w-full grid grid-cols-3 gap-2'>
                <Input
                    label="Topshirish vaqti"
                    type='date'
                    onChange={value => setOrder({ ...order, deadline: value })}
                />
                <Input
                    label="Shartnoma narxi"
                    type='number'
                    value={order?.contract_price}
                    onChange={value => setOrder({ ...order, contract_price: +value === 0 ? '' : +value })}
                />
                <Input
                    label="Oldindan to'lov"
                    type='number'
                    value={order?.prepayment}
                    onChange={value => setOrder({ ...order, prepayment: +value === 0 ? '' : +value })}
                />
            </div>
        </div>
    )
}

export default Sale