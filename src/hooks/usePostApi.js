import axios from  "axios"
import Swal from "sweetalert2"
 
const PostApi = (brand, model, year, color, url) => {

    var FormData = require('form-data');
    var data = new FormData();

    data.append('Brand', brand);
    data.append('Model', model);
    data.append('Year', year);
    data.append('Color', color);
    data.append('Img', url);

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
  
    axios.post('https://localhost:7040/api/Cars',data)
    .then(function (response) {
        console.log(response);
        window.location.href = "/"
        successAlert(response.data)
        
    })
    .catch(function (error) {
        console.log(error);
        errorAlert("Couldn't add")
    });

}

export default PostApi;