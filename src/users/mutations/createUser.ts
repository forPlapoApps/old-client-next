import $api from "lib/$api";

const createUser = async (userSession: UserSession) => {
  if (!userSession) return 

  const { token, ...params } = userSession

  await fetch(`${$api}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearder ${userSession.token}`
    },
    body: JSON.stringify(params),
  });
};

export default createUser
