import axios from "axios";
const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/Developer-Nashat/fake-json-server",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "appliction/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
