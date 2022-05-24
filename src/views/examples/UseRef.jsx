import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import checkSystemKeys from '../../helpers/checkSystemKeys'

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [completeString, setCompleteString] = useState("");
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    const merge = (letter) => {
        setCompleteString(prevValue => prevValue + letter);
    };

    const handleKeyDown = (e, input) => {
        const k = e.which;

        if (e.key === "Backspace") {
            e.preventDefault();
            if (input === 1) {
                setValue2(value2.slice(0, -1));
                myInput2.current.focus();
            } else {
                setValue1(value1.slice(0, -1));
                myInput1.current.focus();
            }
            setCompleteString(completeString.slice(0, -1));
        } else if (checkSystemKeys(k)) {
            merge(e.key);
        }
    };

    useEffect(() => {
        count.current = count.current + 1;
    }, [value1]);
    
    useEffect(() => {
        count.current++;
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!" />

            <SectionTitle title="Exercício #1 " />
            <div className='center'>
                <div>
                    <span className='text'>Valor: </span>
                    <span className='text'>{completeString} [</span>
                    <span className='text red'>{count.current}</span>
                    <span className='text'>]</span>
                </div>
                <input type="text" className="input"
                    ref={myInput1}
                    value={value1}
                    onKeyDown={e => handleKeyDown(e, 1)}
                    onChange={e => {
                        setValue1(e.target.value);
                        myInput2.current.focus();
                    }}
                />
            </div>
            <SectionTitle title="Exercício #2" />
            <div className="center">
                <input type="text"className="input"
                    ref={myInput2}
                    value={value2}
                    onKeyDown={e => handleKeyDown(e, 2)}
                    onChange={e => {
                        setValue2(e.target.value);
                        myInput1.current.focus();
                    }}
                />
            </div>
        </div>
    )
}

export default UseRef
