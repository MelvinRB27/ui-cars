import axios from  "axios"
import Swal from "sweetalert2"

const DeleteApi = (id) => {
    
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
    axios.delete(`https://localhost:7040/api/Cars/`+id)
    .then(function (response) {
        console.log(response);
        window.location.href = "/"
        successAlert(response.data)
    })
    .catch(function (error) {
        console.log(error);
        errorAlert("Couldn't delete")
    });

}

export default DeleteApi;