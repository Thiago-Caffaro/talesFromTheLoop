import './card.css'
import {usePagesContentList} from '../../assets/usePagesContentList';
import { useState, useRef, useEffect } from 'react';

function Card({setIsVisible, isVisible, actualCardKey,}){
    
    // Creation of the array to track the state of zoomed cards
    const totalImages = 2; // Total number of images
    const imagesArray = Array.from({ length: totalImages }, (_, index) => index + 1);

    const [isZoomed, setIsZoomed] = useState(Array(totalImages).fill(false));
    
    const cardContent = useRef(null);
    const [isZ, setIsZ] = useState({
        chave1: 'valor1',
        chave2: 'valor2'
    })
    const zoom = {
        
    }
    useEffect(() => {
        setIsZ(prevState => ({
            ...prevState,
            chave3: 'valor3'
        }));
    }, [isVisible])
    
    /* 
        Uma função para aplicar um zoom no estilo toggle, onde quando clicado, o index da carta é atualizado na 
        lista isZoomed, 
    */
    const toggleZoom = (index) => {
        setIsZoomed(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };
    useEffect(() => {
        if (isVisible) {
            cardContent.current.textContent = pagesContentList[actualCardKey].card.mainText;
            /* 
                Aqui faço com que quando a actualCardKey seja atualizada, 
                o conteúdo de texto mude no html 
            */
        }
        //UseEffect para checar constantemente se o card mudou de chave
    }, [actualCardKey]);
    const handleActSrc = () => {
        if (isVisible) {
            return ("act" + pagesContentList[actualCardKey].card.act)
        }
        /*
            Handle para checar se o card está visivel, e então retornar o act certo para identificar o
            caminho dos cartões.
        */
    }
    return (
        <div id='card'>
            <div id='images'>
                <h1>Cartas</h1>
                <h1>Coletadas</h1>
                {/* retornando a img da carta da coletada com base na lista de index: */}
                {imagesArray.map((id, index) => ( 
                    <img
                        key={index}
                        className={isZoomed[index] ? 'imageCard zoomed' : 'imageCard blind'}
                        /*
                            Aqui é verificado no index do elemento, na lista is zoomed, se está com zoom ou não
                            (true ou false), se estiver ou não, são aplicados classes específicas.
                        */
                        src={`/talesFromTheLoop/cards/${handleActSrc()}/card${id}.png`} 
                        /*
                            Seleciona as cartas de acordo com o id passado pelo map, 
                            que bate com o nome dos arquivos locais
                        */
                        onClick={() => toggleZoom(index)}
                    />
                ))}
            </div>
            <div id='text' ref={cardContent}>
            </div>
            <button onClick={() => setIsVisible(false)}>X</button>
        </div>
    );
}

export default Card
