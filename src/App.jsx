import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos'} />
      </div>
    </ChakraProvider>
  );
}

export default App
