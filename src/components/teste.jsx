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
    fetch('http://alb-api-webserver-2080380489.us-east-2.elb.amazonaws.com/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify(pagesContentList1),
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

        </div>
    )
}

export default Teste;
