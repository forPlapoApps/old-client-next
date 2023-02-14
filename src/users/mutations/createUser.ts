import $api from "lib/$api";

type dataType = {
  name: string | null;
  email: string | null;
  firebaseId: string;
};

const createUser = async (data: dataType) => {
  await fetch(`${$api}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export default createUser
