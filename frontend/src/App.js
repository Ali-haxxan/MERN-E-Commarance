import React from 'react'
import  { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <Header/>
    <main>

      <Container className='py-3'>
      <Routes>

          <Route  path='/' element={<Homescreen></Homescreen>} exact />
          <Route  path="/product/:id" element={<ProductScreen></ProductScreen>}/>
        </Routes>
      </Container>


      

    </main>
    <Footer/>
    </Router>
  );
}

export default App;
