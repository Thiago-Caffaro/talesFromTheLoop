import './App.css'
import Book from './components/book/book'
import Teste from './components/teste';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function AppRouter() {

  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Book />}/>
            <Route path="/teste" element={<Teste />}/>
        </Routes>
    </Router>
  )
}

export default AppRouter
