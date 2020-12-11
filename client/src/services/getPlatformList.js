import axios from "axios";

export async function getPlatformList() {
  const response = await axios.get("http://localhost:4000/status");
  const platforms = response.data;
  return platforms;
}
