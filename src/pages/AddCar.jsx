import "../css/addCar.css"
import { useState} from 'react';
import { useParams } from "react-router-dom";

import PostApi from "../hooks/usePostApi";
import UpdateApi from "../hooks/useUpdate";
const AddCar = () => {
    //THE DATAS OF FORM
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [year, setYear] = useState("")
    const [color, setColor] = useState("")
    const [url, setUrl] = useState("")
    
    const {id} = useParams()
    
    //to change the action of the submission form
    const [formAction, setFormAction] = useState("")
    
    let formSubmit;
    if (formAction === "update"){
        formSubmit = e  => {
            e.preventDefault(); //esto previene que se actualice la página. 
            UpdateApi(brand, model, year, color, url, id.slice(1))
        };
    } else{
        formSubmit = e  => {
            e.preventDefault(); //esto previene que se actualice la página. 
            PostApi(brand, model, year, color, url)
        };
    }

    let idOK;
    if (id !== ":"){
        idOK = false
    }else idOK = true


    return(
        <div className="containerForm">
            <form onSubmit={formSubmit} className="form-control">
                <label htmlFor="brand">Brand</label>
                <input className="form-control" type="text"  required
                onChange={(event) => setBrand(event.target.value)}/>

                <label htmlFor="brand">Model</label>
                <input className="form-control" type="text"  required
                onChange={(event) => setModel(event.target.value)}/>

                <label htmlFor="year">Year</label>
                <input className="form-control" type="text" required 
                onChange={(event) => setYear(event.target.value)}/>

                <label htmlFor="color">Color</label>
                <input className="form-control" type="text"  required
                onChange={(event) => setColor(event.target.value)}/>

                <label htmlFor="image">URL Image</label>
                <input className="form-control" type="text" required
                onChange={(event) => setUrl(event.target.value)}/>
                {idOK ? <button className="btn" type="submit" onClick={()=>setFormAction("post")} > ADD </button> : 
                
                <button className="btn" type="submit" onClick={()=>setFormAction("update")}> UPDATE </button>
                }
                
            </form>
        </div>
    )
}

export default AddCar