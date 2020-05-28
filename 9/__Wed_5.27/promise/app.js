const axios = require("axios");

axios.get("http://api.tvmaze.com/search/shows?q=matrix").then((res) => {
  console.log(res.show.name.data);
  const { data } = res;
});
