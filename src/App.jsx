import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'productos esenciales para cada entrenamiento'} />} ></Route>
          <Route path='/categorias/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/producto/:productId' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App
