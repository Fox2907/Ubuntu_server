import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import FieldScreen from './screens/HomeScreen/FieldScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen'

function App() {

  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/abogado" element={<FieldScreen titulo={"Abogado"} imagen={"/src/assets/Abogado.jpg"} descripcion={"En el ámbito legal, estamos comprometidos a ser tu aliado en cuestiones legales. Nuestro equipo de abogados altamente calificados se dedica a brindarte representación legal sólida y soluciones efectivas para tus necesidades legales. Con un historial de éxitos en casos civiles, penales y empresariales, nuestro equipo tiene la experiencia necesaria para luchar en tu nombre y obtener resultados favorables. Ya sea que enfrentes un desafío legal complejo o busques asesoramiento preventivo, estamos aquí para proteger tus derechos e intereses."}/>} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
