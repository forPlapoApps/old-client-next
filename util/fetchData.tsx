import { ServerResponse } from "http";

const fetchData = async (path: string, resArg: ServerResponse) => {
  const apiUrl = `${process.env.SERVER_URL}${path}`
  try {
    const response = await fetch(apiUrl);
    resArg.statusCode = response.status
    const data = await response.json();
    return data
  } catch (error) {
    if (resArg) {
      resArg.statusCode = 500;
    }
    return null
  }
};

export default fetchData
