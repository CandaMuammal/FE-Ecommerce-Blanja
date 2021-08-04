import React from 'react'
import { useSelector } from 'react-redux'

function Print() {
    const {email} = useSelector((state) => state)

    return (
        <div>
            <h3>ini komponen print email {email}</h3>
        </div>
    )
}

export default Print
