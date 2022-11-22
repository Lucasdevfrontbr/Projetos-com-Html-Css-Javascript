import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Melhores } from './pages/Melhores'
import { Detalhes } from './pages/Detalhes'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
<Route path='/'element={<App/>}></Route>
<Route path='/Melhores'element={<Melhores/>}></Route>
<Route path='/detalhes/:id' element={<Detalhes/>}></Route>
 </Routes>
 </BrowserRouter>
)
