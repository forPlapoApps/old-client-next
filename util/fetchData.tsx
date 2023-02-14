import { ServerResponse } from "http";
import $api from "lib/$api";

const fetchData = async (path: string, resArg: ServerResponse) => {
  const apiUrl = `${$api}${path}`
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
