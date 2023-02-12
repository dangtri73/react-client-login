import axios from "axios"

const fetchData = () => {
return axios.get("localhost:8001/life-plan/api/v1/city")
   .then((response) => console.log(response.data));
}
