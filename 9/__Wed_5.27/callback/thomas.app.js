const axios = require("axios");
axios
  .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy")
  .then(({ data }) => {
    console.log(data);
    return axios.get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy");
  })
  .then((res) => {
    console.log("THIS IS NEW", res.data);
  })
  .catch((err) => console.log(err));
