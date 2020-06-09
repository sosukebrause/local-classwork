const axios = require("axios");

// axios.get("http://api.tvmaze.com/search/shows?q=matrix").then((res) => {
//   console.log(res.show.name.data);
//   const { data } = res;
// });

axios
  .get("http://api.tvmaze.com/search/shows?q=matrix")
  .then(({ data }) => {
    // console.log(data);
    return axios("http://api.tvmaze.com/search/shows?q=matrix");
  })
  .then((res) => {
    // console.log("THIS IS NEW ", res.data);
  });
axios
  .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy")
  .then(({ data }) => {
    //the deconstructor input allows you to access the item within ojbect without all the reference; res.data
    console.log(data.Title);
  })
  .catch((err) => console.log(err));
