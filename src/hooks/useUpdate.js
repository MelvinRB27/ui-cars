import axios from  "axios"
import Swal from "sweetalert2"

const UpdateApi = (brand, model, year, color, url, id) => {
    
    console.log("coñocoño", id)
    var FormData = require('form-data');
    var data = new FormData();
    
    data.append('Brand', brand);
    data.append('Model', model);
    data.append('Year', year);
    data.append('Color', color);
    data.append('Img', url);
    data.append('IdCar', id);
    
    const errorAlert = (msj) =>{
            
                Swal.fire({
                icon: 'error',
                    title: 'Oops...',
                    text: msj,
                })
                
            }    
            const successAlert = (msj) =>{
                Swal.fire({
                  icon: 'success',
                  title: msj,
                  showConfirmButton: false,
                  timer: 1500
                })
            } 

    const updateCar = async() =>{
        await axios.put('https://localhost:7040/api/Cars/'+id, data)
        .then(function (response) {
            console.log(response);
            window.location.href = "/"
            successAlert(response.data)
        })
        .catch(function (error) {
            console.log(error);
            errorAlert("Couldn't updated")
        });
    }
    updateCar()

}

export default UpdateApi;