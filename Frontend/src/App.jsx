
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import Header from './Components/header'
// import HomePage from './Pages/HomePage'

// function App() {


//   return (
//     <div className='bg-[#111111] min-h-screen'>

//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path='/' element={<HomePage />} />
//         </Routes>
//       </BrowserRouter>

//     </div>
//   )
// }

// export default App



import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/header'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
// import AboutPage from './Pages/AboutPage'
// import ServicesPage from './Pages/ServicesPage'
// import ContactPage from './Pages/ContactPage'

function App() {
  return (
    <div className=' min-h-screen'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/about' element={<AboutPage />} />
          <Route path='/service-and-pricing' element={<ServicesPage />} />
          <Route path='/contact' element={<ContactPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

