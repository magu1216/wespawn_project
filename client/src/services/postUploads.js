import axios from "axios";

async function getPlatformList() {
  const response = axios.post(
    "https://frozen-gorge-61178.herokuapp.com/uploads", {
        
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }
      
  );
  .then(function (res) {
    console.log(res);
  })
}

export default getPlatformList;