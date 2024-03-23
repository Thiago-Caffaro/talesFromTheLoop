import './book.css';
import Card from '../card/card';
import Page from '../page/page';
import { useEffect, useRef, useState } from 'react';

function Book() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Estado para controlar se o livro está sendo fechado
  const [actualCardKey, setActualCardKey] = useState("pag0"); //Estado da pageKey da aba de Cards

  const bookRef = useRef(null);
  const bookCoverRef = useRef(null);
  const closeBookRef = useRef(null);
  const cardRef = useRef(null);

  const flip = () => {
    setIsOpen(prevOpen => !prevOpen);
  };

  const handleFlipAnimationComplete = () => {
    if (isOpen) {
      bookRef.current.style.transform = 'translateX(200px)';
    } else {
      bookRef.current.style.transform = 'translateX(0px)';
    }
  };
  // Festa dos useEffects abaixo: 
  useEffect(() => {
    const bookCover = bookCoverRef.current;
    const closeBook = closeBookRef.current;

    const handleFlip = () => {
      flip();
    };
    

    if (bookCover) {
      bookCover.addEventListener('click', handleFlip);
    }

    if (closeBook) {
      closeBook.addEventListener('click', handleFlip);
    }

    return () => {
      if (bookCover) {
        bookCover.removeEventListener('click', handleFlip);
      }
      if (closeBook) {
        closeBook.removeEventListener('click', handleFlip);
      }
    };
  }, []);

  useEffect(() => {
    const bookCover = bookCoverRef.current;

    if (isOpen) {
      if (bookCover) {
        bookCover.style.transform = 'rotateY(-180deg)';
        setTimeout(() => {
          bookCover.style.zIndex = 1;
        }, 500);
        
      }
      closeBookRef.current.style.display = 'inline-block';
    } else {
      if (bookCover) {
          bookCover.style.zIndex = 99;
          bookCover.style.transform = 'rotateY(0deg)';
        
      }
      closeBookRef.current.style.display = 'none';
    }
  }, [isOpen]);

  useEffect(() => {
    handleFlipAnimationComplete();
  }, [isOpen]);

  useEffect(() => {
    console.log(actualCardKey);
  }, [actualCardKey])
  // Função para fechar o livro
  const closeBook = () => {
    setIsClosing(true); // Define que o livro está sendo fechado
    // Remove a classe 'flipped' de todas as páginas
    const pages = document.querySelectorAll('.page-container');
    pages.forEach(page => {
      page.classList.remove('flipped');
    });
    setTimeout(() => {
      setIsOpen(false); // Fecha o livro após a remoção da classe 'flipped'
      setIsClosing(false); // Define que o processo de fechamento do livro foi concluído
    }, 2000); // Tempo suficiente para a animação de virar a página antes de fechar o livro
  };

  // Lista do conteudo dos cards
  
  return (
    <>
      <h1 id="closeBook" ref={closeBookRef} onClick={closeBook}>
        Fechar livro
      </h1>
      <div ref={bookRef} className="book">
        <div className="cover" ref={bookCoverRef}>
          <div className="inside"></div>
        </div>
        <Page 
          setIsVisible={setIsVisible}
          setActualCardKey={setActualCardKey}
          isVisible={isVisible} 
          isClosing={isClosing}
          /* 
            Passa a função setIsVisible e setActualCardKey
            e os estados isVisible e isClosing para Page
          */
          
        /> 
        
        <div className="back-cover"></div>
      </div>
      <div ref={cardRef} className={isVisible ? 'showing' : 'hidden'}>
        <Card setIsVisible={setIsVisible} isVisible={isVisible} actualCardKey={actualCardKey}  />
      </div>
    </>
  );
}

export default Book;
