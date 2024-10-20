import { Token } from "@mui/icons-material";
import axios from "axios";
const BASE_URL= "http://localhost:5000/api/";
const TOKEN="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MGJmZTNmYWZjYzU5MGNiMzRjMTE5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyOTE3MzIzOCwiZXhwIjoxNzI5NDMyNDM4fQ.lgnA01n2mu5SwRkTBAsinxBbuNeLEtB1Nywh_9fIFbw"


export const publicRequest= axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});

export const userRequest= axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})