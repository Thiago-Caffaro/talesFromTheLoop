import "./estilo.css"

function Newpage() {
    const handleSubmit = (event) =>{
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
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
        <h1>Book:</h1>
        <label htmlFor="pag2">Página</label>
        <br />
        <textarea id="pag2" name="pag2" type="text">pag2</textarea>
        <br />
        <label htmlFor="pag2[frontTitle]">FrontTitle</label>
        <input id="pag2[frontTitle]" name="pag2[frontTitle]" type="text"  />
        <br />
        <label htmlFor="pag2[frontText]">FrontText</label>
        <input id="pag2[frontText]" name="pag2[frontText]" type="text"  />
        <br />
        <label htmlFor="pag2[backTitle]">BackTitle</label>
        <input id="pag2[backTitle]" name="pag2[backTitle]" type="text"/>
        <br />
        <label htmlFor="pag2[backText]">BackText</label>
        <input id="pag2[backText]" name="pag2[backText]" type="text" />
        <br />
        <label htmlFor="pag2[index]">Index</label>
        <input id="pag2[index]" name="pag2[index]" type="text" />
        <br />
        <h1>Cards:</h1>
        <label htmlFor="pag2[card][act]">act</label>
        <input id="pag2[card][act]" name="pag2[card][act]" type="text" />
        <br />
        <label htmlFor="pag2[card][mainText]">MainText</label>
        <input id="pag2[card][mainText]" name="pag2[card][mainText]" type="text"/>
        <br />

        <input type="submit" value="Mandar" />
    </form>
</div>

    )
}

export default Newpage;
