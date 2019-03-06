import axios from "axios";

export default function() {
  const token = localStorage.getItem("userToken");

  return axios.create({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  });
}
