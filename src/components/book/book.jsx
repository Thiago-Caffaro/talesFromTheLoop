import './book.css';
import Card from '../card/card';
import Page from '../page/page';
import { useEffect, useRef, useState } from 'react';

function Book() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  
  const bookRef = useRef(null)
  const bookCoverRef = useRef(null);
  const closeBookRef = useRef(null);
  const cardRef = useRef(null);

  

  // Function to toggle isOpen state
  const flip = () => {
    setIsOpen(prevOpen => !prevOpen);
  };

  // Push the book to the left/right
  const handleFlipAnimationComplete = () => {
    if (isOpen) {
      bookRef.current.style.transform = 'translateX(200px)';
    } else {
      bookRef.current.style.transform = 'translateX(0px)';
    }
  };

  // Effect hook to add event listeners and clean them up
  useEffect(() => {
    const bookCover = bookCoverRef.current;
    const closeBook = closeBookRef.current;
    const book = bookRef.current;

    // Function to handle flip event
    const handleFlip = () => {
      flip();
    };

    // Add event listeners
    if (bookCover) {
      bookCover.addEventListener('click', handleFlip);
    }

    if (closeBook) {
      closeBook.addEventListener('click', handleFlip);
    }

    // Clean up event listeners
    return () => {
      if (bookCover) {
        bookCover.removeEventListener('click', handleFlip);
      }
      if (closeBook) {
        closeBook.removeEventListener('click', handleFlip);
      }
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  // Effect hook to update the UI based on isOpen state
  useEffect(() => {
    const bookCover = bookCoverRef.current;

    if (isOpen) {
      if (bookCover) {
        bookCover.style.transform = 'rotateY(-180deg)';
        
      }
      closeBookRef.current.style.display = 'inline-block';
    } else {
      if (bookCover) {
        bookCover.style.transform = 'rotateY(0deg)';
        
      }
      closeBookRef.current.style.display = 'none';
    }
  }, [isOpen]);
  
  // UseEffect to wait the book animation ends
  useEffect(() => {
    handleFlipAnimationComplete();
  }, [isOpen]);

  const moreContent = () => {
    setIsVisible(true);
  };

  return (
    <>
      {/* Close button */}
      <h1 id="closeBook" ref={closeBookRef}>
        Fechar livro
      </h1>
      <button onClick={moreContent}>a</button>
      {/* Book */}
      <div ref={bookRef} className="book">
        <div className="cover" ref={bookCoverRef}>
          <div className="inside"></div>
        </div>
        {/* Pages */}
        <Page/>

        {/* Back cover */}
        <div className="back-cover"></div>
      </div>
      {/* Card */}
      <div ref={cardRef} className={isVisible ? 'showing' : 'hidden'}>
        <Card setIsVisible={setIsVisible} />
      </div>
    </>
  );
}

export default Book;
