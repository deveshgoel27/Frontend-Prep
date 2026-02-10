import React, { lazy, Suspense } from 'react'
import NavBar from './component/NavBar'
import Home from './component/Home'
// import About from './component/About'
// import Contact from './component/Contact'
import { Route, Routes } from 'react-router-dom'

const Contact = lazy(()=> import('./component/Contact'))
const About = lazy(()=>import('./component/About')
   .then((Module)=>({
    default:Module.About,
   }))
)

const App = () => {
  return (
    <>
       <NavBar/>

       <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
               
          <Route path='/contact' element={
      <Suspense fallback={<h1>Loading.....</h1>}> <Contact/></Suspense>     
            }/>
        </Routes>
       </div>

    

       
    </>
  )
}

export default App