import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import style from '../../profileSeller/rightside4/rightside4.module.css'
import nothing from '../../../../../Assets/nothing.png'
import search from '../../../../../Assets/search-logo.png'
import { Table } from 'antd'
import "antd/dist/antd.css"
import axios from 'axios'

const Rightside3 = () => {

    const [history, setHistory] = useState()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(2)
    const username = localStorage.getItem('username')

    const columns = [
        {
            key: '1',
            title: 'Order Id',
            dataIndex: 'id',
            sorter:(record1, record2) => {
                return record1.id > record2.id
            }

        },
        {
            key: '2',
            title: 'Ordered by',
            dataIndex: 'username'

        },
        {
            key: '3',
            title: 'Item',
            dataIndex: 'name'

        },
        {
            key: '4',
            title: 'Price',
            dataIndex: 'price'

        },
        {
            key: '5',
            title: 'Qty',
            dataIndex: 'qty'

        },
    ]

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}v1/history/${username}`)
        .then(res => {
            const data = res.data
            console.log(data)
            setHistory(data.data)
            console.log(history)
            

        }).catch(err => {
            console.log(err)
        })

    })
   
    return (

        <div className={style.rightside}>
            {/* <button onClick={getHistory}>See history</button> */}

            <div className={style.rightbox}>
                <Table
                    dataSource={history}
                    columns={columns}
                    pagination={{
                        current: page,
                        pageSize: pageSize,
                        onChange:(page, pageSize) => {
                            setPage(page);
                            setPageSize(pageSize)
                        }
                    }}
                >


                </Table>

               
            </div>

        </div>
    )
}

export default Rightside3
