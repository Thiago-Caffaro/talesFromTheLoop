import "./estilo.css"

function Newpage() {
    const handleSubmit = (event) =>{
        event.preventDefault();

        const formData = new FormData(event.target);
        let data = {
            pag: formData.get('pag'),
            frontTitle: formData.get('pag[frontTitle]'),
            frontText: formData.get('pag[frontText]'),
            backTitle: formData.get('pag[backTitle]'),
            backText: formData.get('pag[backText]'),
            index: formData.get('pag[index]'),
            card: {
                act: formData.get('pag[card][act]'),
                mainText: formData.get('pag[card][mainText]')
            }
        };
    
        const pagesContentJson = JSON.stringify(data)
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
    }
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

        <input type="submit" value="Mandar" />
    </form>
</div>

    )
}

export default Newpage;
