import './page.css';
import { useEffect, useRef, useState } from 'react';

function Page({ setIsVisible, isClosing, isVisible}) {
    const [pageStates, setPageStates] = useState({});
    const [pageIndexMap, setPageIndexMap] = useState({});
    const [nextAvailableIndex, setNextAvailableIndex] = useState(1);
    const [initialIndexMap, setInitialIndexMap] = useState({});

    useEffect(() => {
        // Inicializa o mapa de índice inicial com os valores iniciais do zIndex de cada página
        const initialIndexMap = {};
        Object.keys(pagesContentList).forEach(pageKey => {
            initialIndexMap[pageKey] = pagesContentList[pageKey].index;
        });
        setInitialIndexMap(initialIndexMap);
    }, []);

    const pagesContentList = {
        pag2: {
            frontTitle: "Ato 2 - ???",
            frontText: "???",
            backTitle: "???",
            backText: "???",
            index: 1
        },
        pag1: {
            frontTitle: "Ato 1 - O vazamento",
            frontText: "`Após um pequeno recesso escolar causado por uma estranha invasão descontrolada de pássaros, as aulas voltaram normalmente, porém, com alunos novos! A maior parte das turmas receberam alunos novos, incluindo a da Lori, onde ela acaba conversando com Jean, uma aluna estranha, e definitivamente excluída pelo seu jeito. Lori indica ela a seu amigo Henry, por acharem parecidos, e então, no intervalo, ambos acabam se conhecendo e conversando sobre diversas coisas, parece que realmente eles tem muita coisa em comum!`",
            backTitle: "Ato 1 - O vazamento",
            backText: "Porém, ao Jean sair de sala, acaba revelando por meio de rabiscos em jornais...",
            index: 2
        }
    }

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

    const handleSetIsVissible = () => {
        setIsVisible(true)
    }
    return (
        <>
            {
                Object.keys(pagesContentList).map(pageKey => {
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
                                    <p id='showCardsText' onClick={handleSetIsVissible} >{pagesContentList[pageKey].backText}</p>
                                    
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
