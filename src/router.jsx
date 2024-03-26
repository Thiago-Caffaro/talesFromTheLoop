import './App.css'
import Book from './components/book/book'
import Newpage from './components/newpage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function AppRouter() {

  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Book />}/>
            <Route path="/newpage" element={<Newpage />}/>
        </Routes>
    </Router>
  )
}

export default AppRouter
