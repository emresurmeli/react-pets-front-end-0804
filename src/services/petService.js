const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const show = async (petId) => {
  try {
    const res = await fetch(BASE_URL + `/${petId}`);
    const data = res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const newPet = async (petData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(petData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const updatePet = async (petData) => {
  try {
    const res = await fetch(BASE_URL + `/${petData._id}`, {
      method: "PUT",
      body: JSON.stringify(petData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export { index, show, newPet, updatePet };
