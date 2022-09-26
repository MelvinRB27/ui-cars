import { useState, useEffect } from "react";
import axios from "axios";

const GetCars = (brand) => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    console.log(data)

    useEffect(() => {
      // GET  request using axios inside useEffect React hook
      const getCars = async() =>{
        await axios({
          method: 'get',
          url: ` https://localhost:7040/api/Cars/`+brand,
        })
        .then(function (response) {
          // console.log(response.data)
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
          setError(error);
        });
     }
     getCars()
   }, [brand]);
    return [data, error]
}

export default GetCars