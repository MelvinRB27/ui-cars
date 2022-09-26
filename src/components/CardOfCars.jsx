import "../css/cardOfCars.css"
import { Link } from "react-router-dom"

import DeleteApi from "../hooks/useDeleteApi"

const CardOfCars = ({url, brand, model, year, color, id,}) => {

    return(
        <div className="containerList">
            <div className="card">
                <img src={url} alt="" />
                
                <div className="containerID">
                    {id}
                </div>

                <div className="infoCars">
                    <h6><b>Brand:</b> {brand}</h6>
                    <h6><b>Model:</b> {model}</h6>
                    <h6><b>Year:</b>  {year}</h6>
                    <h6><b>Color:</b> {color}</h6>
                </div>

                <div className="btns">
                    <Link className="btn btn-dark" onClick={()=> DeleteApi(id)}>DELETE</Link>
                    <Link to={"/add-cars:"+id} className="btn btn-success">UPDATE</Link>
                </div>
            </div>
        </div>
    )
}

export default CardOfCars