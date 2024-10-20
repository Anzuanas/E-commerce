
import axios from "axios";
const BASE_URL= "http://localhost:5000/api/";
const TOKEN="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MGFjNTcxOWEyNzQ5ZGM2OTM1NzhlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyOTQzMzk3OSwiZXhwIjoxNzI5NjkzMTc5fQ.txqNAruDEYZSa68RVDoX2R0G9_od3KMu-PEySxkRDTM"


export const publicRequest= axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});

export const userRequest= axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})