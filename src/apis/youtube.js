import axios from "axios";
const KEY = "AIzaSyDz-3oGhAaYeI540hKxrFjAMRIKRg_8Z3A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    chart: "mostPopular",
    order: "relevance",
    type: "video"
  }
});

// This key is specifically made to be used by public.
