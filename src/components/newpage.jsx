import { useState } from "react";
import "./estilo.css"

function Newpage() {   
    // Tudo que acontece ao enviar os dados
    const handleSubmit = (event) =>{
        event.preventDefault();

        const formData = new FormData(event.target); // Criando um formData para trabalhar com multipart/form-data
        const cardsFiles = document.querySelector('#cardsFile').files; // Aqui pego os arquivos jogados no input de arquivos para os cards

        // Uma promessa para esperar os arquivos serem carregados, e então criar um array com eles
        // Ela é junta de um map que irá passar por cada arquivo "file" e transformar em uma string em base64
        let cardsImagesPromises = Array.from(cardsFiles).map(file =>{
            return new Promise((resolve, reject) =>{
                let reader = new FileReader();
                reader.readAsDataURL(file); // Com o fileReader, lê o arquivo
                reader.onloadend = function(){ // E então, quando a leitura acabar, o reader retornará o resultado (em base64)
                    let base64data = reader.result;
                    resolve(base64data); // Retorna no array o valor em base64
                };
                reader.onerror = reject; // Em caso de erro, rejeitará
            });
        });
            
        
        Promise.all(cardsImagesPromises)
        .then(cardsImages => {
            let data = {
                pag: formData.get('pag'),
                frontTitle: formData.get('pag[frontTitle]'),
                frontText: formData.get('pag[frontText]'),
                backTitle: formData.get('pag[backTitle]'),
                backText: formData.get('pag[backText]'),
                index: formData.get('pag[index]'),
                card: {
                    act: formData.get('pag[card][act]'),
                    mainText: formData.get('pag[card][mainText]'),
                    cardImages: cardsImages
                }
            };
            // Aqui eu transformo os dados do formulário em json e junto ao formData
            let dataJson = JSON.stringify(data);
            formData.append('data', dataJson);
            
            // Aqui envio os dados do formData com um fetch
            fetch('https://api.caffaro.cloud/add', {
                    method: 'POST',
                    body: formData,
            })
            .then(response => response.json())
            .then(pagesContentList1 => {
                console.log('Sucesso:', pagesContentList1);//Loggando o resultado do fetch
            })
            .catch((error) => {
                console.error('Erro:', error);
            });
            })
        .catch(error => {
            console.error('Erro ao ler os arquivos:', error);
        });
    };

    // Literalmente todos os formulários
    return (
        <div>
        <form onSubmit={handleSubmit} id="formulario" action="" method="post">
        <h1>Livro:</h1>
        <label htmlFor="pag">Página</label>
        <br />
        <input id="pag" name="pag" type="number"></input>
        <br />
        <label htmlFor="pag[frontTitle]">FrontTitle</label>
        <input id="pag[frontTitle]" name="pag[frontTitle]" type="text"  />
        <br />
        <label htmlFor="pag[frontText]">FrontText</label>
        <br />
        <textarea id="pag[frontText]" name="pag[frontText]" type="text"  />
        <br />
        <label htmlFor="pag[backTitle]">BackTitle</label>
        <input id="pag[backTitle]" name="pag[backTitle]" type="text"/>
        <br />
        <label htmlFor="pag[backText]">BackText</label>
        <br />
        <textarea id="pag[backText]" name="pag[backText]" type="text" />
        <br />
        <label htmlFor="pag[index]">Index</label>
        <input id="pag[index]" name="pag[index]" type="number" />
        <br />
        <h1>Cards:</h1>
        <label htmlFor="pag[card][act]">act</label>
        <input id="pag[card][act]" name="pag[card][act]" type="number" />
        <br />
        <label htmlFor="pag[card][mainText]">MainText</label>
        <br />
        <textarea id="pag[card][mainText]" name="pag[card][mainText]" type="text"/>
        <br />
        <input type="file" id="cardsFile" multiple />
        <div id="filesBox">            

        </div>
        <br />
        <input type="submit" value="Mandar" />
    </form>
</div>

    )
}

export default Newpage;
