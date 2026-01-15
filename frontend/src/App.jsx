import React from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Routes,Route } from 'react-router-dom'
import Main from "./pages/Main"
import Create from "./pages/Create"
import Detail from "./pages/Detail"
import Header from './components/Header'


const App = () => {
  
  return (
    <>
  
 <Header/>
    <Routes>
     
      <Route path="/" element={<Main/>} />
      <Route path="/create" element={<Create/>}/>
      <Route path="/movie/:id" element={<Detail/>} />



 
    </Routes>
      </>
  )
}

export default App
