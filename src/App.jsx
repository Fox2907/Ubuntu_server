import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FieldScreen from "./screens/HomeScreen/FieldScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Footer from "./components/Footer";
import professions from '/src/assets_project/Professions.json'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {professions.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <FieldScreen
                titulo={route.title}
                imagen={route.image}
                descripcion={route.description}
                cards={route.cards}
              />
            }
          />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
