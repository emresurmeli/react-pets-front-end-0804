import * as petService from "../../services/petService.js";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./PetDetail.css"

const PetDetail = ({ setPets }) => {
  const params = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState({});
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getPet = async () => {
      const petData = await petService.show(params.petId);
      setPet(petData);
    };
    getPet();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const editPet = await petService.updatePet(pet);

    if (!editPet) {
      setError("There was an error, try again");
    } else {
      setPets((prev) => [...prev, editPet]);
      setPet(editPet);
      setIsEditing(false);
      navigate(`/pets/${pet._id}`);
    }
  };

  return (
    <>
      {!isEditing ? (
        <div>
          <h1>Pet Detail</h1>
          <h2>Name: {pet.name}</h2>
          <h2>Breed: {pet.breed}</h2>
          <h2>
            Age: {pet.age} year{pet.age > 1 ? "s" : ""} old
          </h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p>{error}</p>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={pet.name}
            onChange={(e) =>
              setPet({ ...pet, [e.target.name]: e.target.value })
            }
          />
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={pet.age}
            onChange={(e) =>
              setPet({ ...pet, [e.target.name]: e.target.value })
            }
          />
          <label>Breed:</label>
          <input
            type="text"
            name="breed"
            value={pet.breed}
            onChange={(e) =>
              setPet({ ...pet, [e.target.name]: e.target.value })
            }
          />
          <button type="submit">Edit Pet</button>
        </form>
      )}

      <Link to="/">
        <button>All Pets</button>
      </Link>
      <button onClick={() => setIsEditing(!isEditing)}>
        {!isEditing ? "Edit Pet" : "Cancel Edit"}
      </button>
    </>
  );
};

export default PetDetail;
