


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/header'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import AboutPage from './Components/About'
import ServicesPage from './Components/Services'
// import ContactPage from './Pages/ContactPage'

function App() {
  return (
    <div className='relative min-h-screen'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/service-and-pricing' element={<ServicesPage />} />
          {/* <Route path='/contact' element={<ContactPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App


