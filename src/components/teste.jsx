import "./estilo.css"
function Teste() {
    const pagesContentList1 = {
        pag2: {
            frontTitle: "Ato 2 - O abeçoado e infeliz pianista",
            frontText: `
                Adentrando na floresta, o grupo de crianças continuam escutando o piano que parece estar cada vez
                mais e mais perto. Em torno da floresta, começam a ser rodeados pela estranha linha de energia brilhante,
                que, após jogarem um graveto, perceberam que não era uma linha qualquer, e sim uma divisão aparentemente
                mortal, já que o graveto acabou se desfazeno em segundos, então tentarm ficar o mais afastados possível.
                Porém mais a frente, encontraram um caminho pela mata, por um lugar estreito e cercado pela "linha divisória"`
                ,
            backTitle: "Ato 2 - O abeçoado e infeliz pianista",
            backText: `
                Ao passar por este lugar apertado, conseguiram encontrar uma antiquada cabana, bem destruída, e cercada pela 
                mesma linha...
                `,
            card: {
                act: 2,
                mainText: `
                    Ao entrarem nela, encontram armas
                `
            },
            index: 1
        }
    } 
    const pagesContentJson = JSON.stringify(pagesContentList1)
    fetch('https://api.caffaro.cloud/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
            body: pagesContentJson,
        })
        .then(response => response.json())
        .then(pagesContentList1 => {
            console.log('Sucesso:', pagesContentList1);
        })
        .catch((error) => {
            console.error('Erro:', error);
        });
    
    return (
        <div>
            <form id="formulario" action="" method="post">
                <h1>Book:</h1>
                <label htmlFor="pag">Página</label>
                <br />
                <textarea id="pag" name="pag" type="text" />
                <br />
                <label htmlFor="pag">FrontTitle</label>
                <input id="pag" name="pag" type="text" />
                <br />
                <label htmlFor="pag">FrontText</label>
                <input id="pag" name="pag" type="text" />
                <br />
                <label htmlFor="pag">BackTitle</label>
                <input id="pag" name="pag" type="text" />
                <br />
                <label htmlFor="pag">BackText</label>
                <input id="pag" name="pag" type="text" />
                <br />
                <label htmlFor="pag">Index</label>
                <input id="pag" name="pag" type="text" />
                <br />
                <h1>Cards:</h1>
                <label htmlFor="pag">act</label>
                <input id="pag" name="pag" type="text" />
                <br />
                <label htmlFor="pag">MainText</label>
                <input id="pag" name="pag" type="text" />
                <br />

                <input type="submit" value="Mandar" />
            </form>
        </div>
    )
}

export default Teste;
