import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Categories from './components/Categories/Categories'
import { Route,Routes } from 'react-router-dom'
import Aboutpage from './components/About/About'
import Projectpage from './components/Project/Project'
import Services from './components/Services/Services'

const App = () => {
  
  const Homepage =() => {
  return (
    <div>
 
   <Landing/>
   <Categories/>
   <Services/>
    </div>
  )
}
return (
  <div className='w-full h-screen  text-white  '>
 <Navbar/>

<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/home' element={<Homepage/>}/>
  <Route path='/about' element={<Aboutpage/>}/>
  <Route path='/project' element={<Projectpage/>}/>
  <Route path='/contact' element={<Homepage/>}/>
  
</Routes>

  </div>
)
 
}
export default App