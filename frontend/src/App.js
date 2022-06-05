import React from 'react'
import  { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './screens/Homescreen';

const App = () => {
  return (
    <>
    <Header/>
    <main>

      <Container className='py-3'>

        <Homescreen />
      </Container>


      

    </main>
    <Footer/>
    </>
  );
}

export default App;
