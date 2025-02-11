import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router";
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';

function App() {
  return (
    <BrowserRouter>
        <div className="main-content">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}
export default App;