import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import style from './rightside4.module.css'
import nothing from '../../../../../Assets/nothing.png'
import search from '../../../../../Assets/search-logo.png'
import { Table } from 'antd'
import "antd/dist/antd.css"
import axios from 'axios'

const Rightside4 = () => {

    const [history, setHistory] = useState()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(8)

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
        axios.get(`${process.env.REACT_APP_API_URL}v1/history`)
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

                {/* <div className={style["tab-wrap"]}>
                        <div className={style.header}>
                            History
                        </div>
                        <input type="radio" name="slider" classNameName={style.radio} id={style.all} checked />
                        <input type="radio" name="slider" classNameName={style.radio} id={style.notyet} />
                        <input type="radio" name="slider" classNameName={style.radio} id={style.packed} />
                        <input type="radio" name="slider" classNameName={style.radio} id={style.sent} />
                        <input type="radio" name="slider" classNameName={style.radio} id={style.completed} />
                        <input type="radio" name="slider" classNameName={style.radio} id={style.cancel} />

                        <div className={style["tab-title"]}>
                            <label for="all" className={style.all}>All items</label>
                            <label for="notyet" className={style.notyet}>Unpaid</label>
                            <label for="packed" className={style.packed}>Packed</label>
                            <label for="sent" className={style.sent}>Sent</label>
                            <label for="completed" className={style.about}>Completed</label>
                            <label for="cancel" className={style.cancel}>Cancel</label>
                            <div className={style.slider}></div>
                        </div>
                        <div className={style.horizontal}></div>

                    </div> */}
                {/* <div className={style.searchitem}>
                        <input type="text" placeholder="Search" />
                        <img src={search} alt="" />
                    </div> */}
                {/* <div className={style.nothing}><img src={nothing} alt="" /></div> */}
            </div>

        </div>
    )
}

export default Rightside4
