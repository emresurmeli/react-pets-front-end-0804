import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import * as petService from "./services/petService.js";
import PetDetail from "./components/PetDetail/PetDetail.jsx";
import PetList from "./components/PetList/PetList.jsx";
import PetForm from "./components/PetForm/PetForm.jsx";
import "./App.css";

const App = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getPets = async () => {
      const allPets = await petService.index();
      setPets(allPets);
    }
    getPets();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<PetList pets={pets} />} />
        <Route path="/pets/new" element={ <PetForm setPets={setPets} />} />
        <Route path="/pets/:petId" element={<PetDetail setPets={setPets} />} />
      </Routes>
    </>
  );
};

export default App;
