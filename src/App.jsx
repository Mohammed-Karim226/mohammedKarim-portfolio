import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePage, Projects, About, Contact} from './pages';
import {Footer, NavBar}  from './components';
function App() {


  return (
    <>
      <main className='bg-slate-300/20 h-full' >
        
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </Router>

      </main>
    </>
  )
}

export default App;
