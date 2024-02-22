import './page.css'
import { useEffect, useRef } from 'react';


function Page(){
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://kit.fontawesome.com/f6a6b5ecf4.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    // Pages content list
    const pagesContentList = {
        pag1: {
            title: "Ato 1 - O vazamento",
            text: "`Após um pequeno recesso escolar causado por uma estranha invasão descontrolada de pássaros, as aulas voltaram normalmente, porém, com alunos novos! A maior parte das turmas receberam alunos novos, incluindo a da Lori, onde ela acaba conversando com Jean, uma aluna estranha, e definitivamente excluída pelo seu jeito. Lori indica ela a seu amigo Henry, por acharem parecidos, e então, no intervalo, ambos acabam se conhecendo e conversando sobre diversas coisas, parece que realmente eles tem muita coisa em comum!`"
        }, 
        pag2: {
            title: "Ato 2 - O vazamento",
            text: "`Pós um pequeno recesso escolar causado por uma estranha invasão descontrolada de pássaros, as aulas voltaram normalmente, porém, com alunos novos! A maior parte das turmas receberam alunos novos, incluindo a da Lori, onde ela acaba conversando com Jean, uma aluna estranha, e definitivamente excluída pelo seu jeito. Lori indica ela a seu amigo Henry, por acharem parecidos, e então, no intervalo, ambos acabam se conhecendo e conversando sobre diversas coisas, parece que realmente eles tem muita coisa em comum!`"
        }
        
    }


    return(
        <>
           {
                Object.keys(pagesContentList).map(pageKey => {
                    const pageRef = useRef(null); // Crie um useRef para cada página
                    const flip = () => {
                        pageRef.current.classList.add('flipped');
                        console.log(pageRef.current)
                    }

                    return (
                        <div key={pageKey} ref={pageRef} className="front-page">
                            <div className="text-area">
                                <h2>{pagesContentList[pageKey].title}</h2>
                                <p>{pagesContentList[pageKey].text}</p>
                            </div>
                            <button onClick={flip} className='next'><i className="fas fa-chevron-right"></i></button>
                        </div>
                    );
                })
            }
        </>
    );
}

export default Page;