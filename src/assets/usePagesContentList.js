import { useState, useEffect } from 'react';
import { fetchPagesContentList } from './pagesContent';

export function usePagesContentList() {
    const [pagesContentList, setPagesContentList] = useState({});

    useEffect(() => {
        fetchPagesContentList().then(data => {
            setPagesContentList(data); // armazena os dados no estado quando eles são carregados
        });
    }, []); // a dependência vazia garante que isso seja executado apenas uma vez, quando o componente é montado

    return pagesContentList;
}
