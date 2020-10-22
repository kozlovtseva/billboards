import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        Authorization: "Api-Key 0WcHD76X.177HKXY0hU3zWY2rJwDZYJ1eGczvVFYS",
    },
});

export default instance;
