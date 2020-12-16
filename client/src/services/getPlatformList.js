import axios from "axios";

async function getPlatformList() {
  const response = await axios.get(
    "https://frozen-gorge-61178.herokuapp.com/platforms"
  );
  const platforms = response.data;
  return platforms;
}

export default getPlatformList;
