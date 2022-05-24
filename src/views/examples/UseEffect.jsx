import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    //exercicio 1
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number]);

    useEffect(function () {
        if (fatorial > 10000) {
            document.title = "Oppss"
        }
    }, [fatorial]);

    //desafio useEffect
    const [status, setStatus] = useState("Ímpar")

    useEffect(function () {
        setStatus(number % 2 === 0 ? "Par" : "Ímpar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />
            <SectionTitle title="Exercício #1" />
            <div className="center">
                <span className="text"> Fatorial </span>
                <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>
            <SectionTitle title="Desafio useEffect" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
