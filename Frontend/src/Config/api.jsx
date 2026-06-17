const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000/api"
    : "https://sharp-and-mobile-backend.onrender.com/api";

export default BASE_URL;
