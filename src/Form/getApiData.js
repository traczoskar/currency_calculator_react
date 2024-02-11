import axios from "axios";

export const getApiData = async () => {
  try {
    const response = await axios.get("./exampleJSON.json");
    console.log("Calling getApiData", response);
    console.log("exampleJSON content:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
};
