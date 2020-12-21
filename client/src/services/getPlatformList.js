import axios from "axios";

async function getPlatformList() {
  const response = await axios.get(
    "https://frozen-gorge-61178.herokuapp.com/platforms"
  );
  const platforms = response.data;
  return platforms;
}

export async function getPictures() {
  const response = await axios.get("http://localhost:4000/picture");
  return response.data;
}

export default getPlatformList;
