import './page.css';
import { usePagesContentList } from '../../assets/usePagesContentList';
import { useEffect, useRef, useState } from 'react';

function Page({ setIsVisible, setActualCardKey, isClosing, isVisible}) {
    const [pageStates, setPageStates] = useState({});
    const [pageIndexMap, setPageIndexMap] = useState({});
    const [nextAvailableIndex, setNextAvailableIndex] = useState(1);
    const [initialIndexMap, setInitialIndexMap] = useState({});

    const pagesContentList = usePagesContentList();

    useEffect(() => {
        // Inicializa o mapa de índice inicial com os valores iniciais do zIndex de cada página
        Object.keys(pagesContentList).forEach(pageKey => {
            initialIndexMap[pageKey] = pagesContentList[pageKey].index;
        });
        setInitialIndexMap(initialIndexMap);
    }, [pagesContentList]); // essa dependência garante que isso seja executado sempre que pagesContentList for atualizado



    const flipPage = (pageKey) => {
        setPageStates(prevState => ({
            ...prevState,
            [pageKey]: !prevState[pageKey]
        }));

        const nextPageIndex = nextAvailableIndex;
        setNextAvailableIndex(nextPageIndex + 1);
        setPageIndexMap(prevMap => ({
            ...prevMap,
            [pageKey]: nextPageIndex
        }));
    }

    useEffect(() => {
        if (isClosing) {
            // Restaura os valores iniciais do zIndex de todas as páginas
            setNextAvailableIndex(1)
            setPageIndexMap(initialIndexMap);
        }
    }, [isClosing, initialIndexMap]);

    const handleSetIsVisible = (actualCardKey) => {
        /* 
            Aqui, passo a key da página para o componente book, e transformo em um index, sendo ele passado para a função abaixo 
        */
        setActualCardKey(actualCardKey);
        setIsVisible(true);
    }
    return (
        <>
            {Object.keys(pagesContentList).length > 0 && Object.keys(pagesContentList).map(pageKey => {
                    const pageRef = useRef(null);
                    const pageIndex = pageIndexMap[pageKey] || pagesContentList[pageKey].index;
                    const isFlipped = !!pageStates[pageKey];

                    return (
                        <div className={`page-container ${isFlipped ? 'flipped' : ''}`} key={pageKey} ref={pageRef} style={{ zIndex: pageIndex }}>
                            <div className="front-page">
                                <div className="text-area">
                                    <h2>{pagesContentList[pageKey].frontTitle}</h2>
                                    <p>{pagesContentList[pageKey].frontText}</p>
                                    <div className='next' onClick={() => flipPage(pageKey)}>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z"/></svg>
                            </div>
                                </div>
                            </div>
                            <div className="back-page">
                                <div className="text-area">
                                    <h2>{pagesContentList[pageKey].backTitle}</h2>
                                    <p id='showCardsText' 
                                        onClick={() => handleSetIsVisible(pageKey)} 
                                        /*
                                            Passa o index do elemento para o handleSetIsVisible
                                        */
                                    >
                                        {pagesContentList[pageKey].backText}
                                    </p>
                                    
                                    <div className='next' onClick={() => flipPage(pageKey)}>
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z"/></svg>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    );
                })
            }
        </>
    );
}

export default Page;
