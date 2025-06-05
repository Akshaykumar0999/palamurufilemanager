import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import CreateAnimal from "./components/CreateAnimals";
import CreateMating from "./components/CreatMating";
import MatingRecords from "./components/MatingRecords";
import AnimalRecords from "./components/AnimalRecords";

function App() {
  return (
    <div className="paint-inventory-main-container">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-animal" element={<CreateAnimal />} />
        <Route path='/create-mating' element={<CreateMating />} />
        <Route path='/mating-records' element={<MatingRecords />} />
        <Route path="/animal-records" element={<AnimalRecords />} />
       </Routes>
    </div>
  );
}

export default App;
