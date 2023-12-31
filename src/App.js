import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Paginas/HomePage";
import AboutPage from "./Paginas/AboutPage";
import Usuarios from "./Paginas/Usuarios";
import NoEstoy from "./Paginas/NoEstoy";
import Navbar from "./componentes/Navbar";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/otro" element={<AboutPage />} />
        <Route path="/users" element={<Usuarios />} />
        <Route path="*" element={<NoEstoy />} />
      </Routes>
    </BrowserRouter>
  );
}
