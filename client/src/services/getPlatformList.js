import axios from "axios";

async function getPlatformList() {
  const response = await axios.get("http://localhost:4000/platforms");
  const platforms = response.data;
  return platforms;
}

export default getPlatformList;
