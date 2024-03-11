import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
import Product from './Pages/Product'
import Orders from './Pages/Orders';
import Footer from './Components/Footer';

function App() {
 

  return (
    <Router>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product/*" element={<Product />} />
        <Route path='/order' element={<Orders />} />
      </Routes>
      <Footer />
    </>
  </Router>
  )
}

export default App
