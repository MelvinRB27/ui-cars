import "../css/listCars.css"
import CardOfCars from "../components/CardOfCars"
import GetCars from "../hooks/useGetApi"

import { useState } from "react"
const ListCars= () => {
    
    const [search, setSearch] = useState("")
    const [cars, error] = GetCars(search);

    if (error){
        return <h1>ERROR</h1>
    }

    return (
        <div className="listCards">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search by name" aria-label="Recipient's username" aria-describedby="basic-addon2"
                onChange={(event) => setSearch(event.target.value)}
                />
            </div>
            {
                cars.map(({
                    idCar,
                    brand,
                    model,
                    year,
                    color,
                    img
                }) => {

                    return(
                        <div className="cardElements" key={idCar} id={idCar}>
                            
                            <CardOfCars url={img} 
                            brand = {brand}
                            model = {model}
                            year = {year}
                            color = {color}
                            id = {idCar}
                            />
                            
                        </div>
                    )             
                })

            }
                
            
        </div>
    )
}

export default ListCars