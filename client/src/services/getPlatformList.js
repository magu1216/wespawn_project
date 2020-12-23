import axios from "axios";

async function getPlatformList() {
  const response = await axios.get("https://wespawn.herokuapp.com/platforms");
  const platforms = response.data;
  return platforms;
}

export async function getPictures() {
  const response = await axios.get("https://wespawn.herokuapp.com/picture");
  return response.data;
}

export default getPlatformList;
