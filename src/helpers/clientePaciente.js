import axios from "axios";

const insertar = async (body, vm) => {
    vm.isLoading = true; 

    try {
        const response = await axios.post(`http://localhost:8080/API/v1.0/Registro/pacientes`, body);
        console.log(response.data);
        vm.isLoading = false; 
    } catch (error) {
        console.error("Error al insertar:", error);
        vm.isLoading = false; 
    }
}

export const insertarfachada = async (body, vm) => {
    await insertar(body, vm);
}
