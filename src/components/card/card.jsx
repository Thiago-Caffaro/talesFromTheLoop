import './card.css'
import { useState } from 'react';

function Card({setIsVisible}){
    // Creation of the array to track the state of zoomed cards
    const totalImages = 2; // Total number of images
    const imagesArray = Array.from({ length: totalImages }, (_, index) => index + 1);

    const [isZoomed, setIsZoomed] = useState(Array(totalImages).fill(false));

    /* Here it takes the index of the card, aciona a função do useState, e  */
    const toggleZoom = (index) => {
        setIsZoomed(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div id='card'>
            <div id='images'>
                <h1>Cartas</h1>
                <h1>Coletadas</h1>
                {imagesArray.map((id, index) => (
                    <img
                        key={index}
                        className={isZoomed[index] ? 'imageCard zoomed' : 'imageCard blind'}
                        src={`/talesFromTheLoop/cards/act1/card${id}.png`}
                        onClick={() => toggleZoom(index)}
                    />
                ))}
            </div>
            <div id='text'>
            ...acaba revelando por meio de rabiscos em jornais, sua imensa confusão sobre os pássaros que foram estranhamentr encobertados pela mídia, e uma pequena floresta localizada perto de um dos túneis de trabalho do loop.
Após as aulas, todos decidem marcar um encontro com Jean na casa do Jimmy, para revelar tudo que viram ultimamente, como os pássaros e as fitas. 
Quando ela entra mais a fundo no assunto de suas teorias, ela sita um coisa que nem ela sabe explicar aconteceu quando explorava sozinha, viu um servo morto, porém, com sua metade completamente fresca, como tivesse sido cortado vivo, e outra metade com apenas ossos, já quebradiços sem nenhum sinal de carne.

As crianças decidem explorar a área, e ao chegar ao local, e ao chegar, os corpos eram verdade, estão todos lá, e parecem ter mais dentro da floresta. A curiosidade delas fala mais alto, e acabam adentrando a floresta que parece ficar cada vez mais escura conforme andam, mas, esta floresta não possuí árvores volumosas, pelo contrário, são finas e pouco densas, o céu é quem está escurecendo, ou melhor, está... Entardecendo, mesmo sendo 3 horas da tarde.
Ao seguir a luz azul eminente do fundo da floresta, todos acabam escutando algo bem suave de fundo.
O piano ecoa pela floresta silenciosa, enquanto os corpos desfigurados de animais apenas surgem mais e mais. A luz azul ficando cada vez mais forte, enquanto a música parece penetrar em seus corpos como intensas vibrações, cada vez mais fortes e mais altas.
            </div>
            <button onClick={() => setIsVisible(false)}>X</button>
        </div>
    );
}

export default Card
