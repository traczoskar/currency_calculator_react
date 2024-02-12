import axios from "axios";

export const getApiData = async () => {
  try {
    const response = await axios.get("./exampleJSON.json");
    return response.data;
  } catch (error) {
    console.error("Error while fetching data:", error.message);
  }
};
