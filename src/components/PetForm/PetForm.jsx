import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { newPet } from "../../services/petService";
import "./PetForm.css";

const PetForm = ({ setPets }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [petData, setPetData] = useState({
    name: "",
    age: "",
    breed: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const petRequest = await newPet(petData);

    if (!petRequest) {
      setError("There was an error, try again");
    } else {
      setPets((prev) => [...prev, petRequest]);
      setPetData({});
      navigate("/");
    }
  };

  return (
    <>
      <h2>New Pet</h2>
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={petData.name}
          onChange={(e) =>
            setPetData({ ...petData, [e.target.name]: e.target.value })
          }
        />
        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={petData.age}
          onChange={(e) =>
            setPetData({ ...petData, [e.target.name]: e.target.value })
          }
        />
        <label>Breed:</label>
        <input
          type="text"
          name="breed"
          value={petData.breed}
          onChange={(e) =>
            setPetData({ ...petData, [e.target.name]: e.target.value })
          }
        />
        <button type="submit">Add Pet</button>
      </form>
      <Link to="/">
        <button>All Pets</button>
      </Link> 
    </>
  );
};

export default PetForm;
