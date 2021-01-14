import axios from "axios";

export default axios.create({
  //axios.create allows to create a customized copy of it towards making request to some specific URL with just this header
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 4ArbH5wyr2LWuVGlJHPkePXXLL0lcEuWFE8e6dUvT7I",
  },
});
