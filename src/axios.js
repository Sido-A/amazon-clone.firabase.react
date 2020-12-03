import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://us-central1-ama-zon-clone-firebase-react.cloudfunctions.net/api",
  // "http://localhost:5001/ama-zon-clone-firebase-react/us-central1/api",
});

export default instance;
