const pagesContentList = {}
fetch('https://api.caffaro.cloud')
    .then(response => response.json()) // converte a resposta em JSON
    .then(data => {
        pagesContentList = {data} // manda o que pegou do banco de dados para a variável pageContentList
    })
    .catch(error => console.error('Erro:', error));

export default pagesContentList;