import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import CreateAnimal from "./components/CreateAnimals";
import CreateMating from "./components/CreatMating";
import MatingRecords from "./components/MatingRecords";

function App() {
  return (
    <div className="paint-inventory-main-container">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-animal" element={<CreateAnimal />} />
        <Route path='/create-mating' element={<CreateMating />} />
        <Route path='/mating-records' element={<MatingRecords />} />
       </Routes>
    </div>
  );
}

export default App;
