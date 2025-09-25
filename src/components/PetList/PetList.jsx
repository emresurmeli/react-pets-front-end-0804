import { Link } from "react-router";
import "./PetList.css";

const PetList = ({ pets }) => {
  return (
    <div>
      <h1>Pet List</h1>
      <div>
        {pets.length === 0 ? (
          <p>You've no pets</p>
        ) : (
          <ul>
            {pets.map((pet) => (
              <Link key={pet._id} to={`/pets/${pet._id}`}>
                <li>{pet.name}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
      <Link to="/pets/new">
        <button>Add Pet</button>
      </Link>
    </div>
  );
};

export default PetList;
