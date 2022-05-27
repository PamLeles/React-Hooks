import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbacksButtons from '../../components/Button/UseCallbacksButtons.jsx'

const UseCallback = (props) => {
    const [count, setCount] = useState(0);

    const inc = useCallback((delta) => {
        setCount(curr => curr + delta)
    }, [setCount]);

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memorizada!" />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbacksButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
