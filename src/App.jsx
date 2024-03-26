import './App.css'
import Book from './components/book/book'
import Teste from './components/teste';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Route path="/" exact component={Book}/>
      <Route path="/teste" exact component={Teste}/>
    </Router>
  )
}

export default App
