const BASIC_URL = "http://localhost:8000/product";
export const GetAllProduct = async () => {
    let options ={
        headers: {
            "content-type": "application/json",
                // "Authorization": `Bearer ${localStorage.getItem("token")} `
        }}
    try {
        return await fetch(`${BASIC_URL}?`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const GetProductByName = async (name) => {
    let options ={
        headers: {
            "content-type": "application/json",
                // "Authorization": `Bearer ${localStorage.getItem("token")} `
        }}
    try {
        return await fetch(`${BASIC_URL}/name/${name}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const GetProductByType = async (type) => {
    let options ={
        headers: {
            "content-type": "application/json",
                // "Authorization": `Bearer ${localStorage.getItem("token")} `
        }}
    try {
        return await fetch(`${BASIC_URL}/Type/${type}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
// export const GetProductById = async (id) => {
//     let options ={
//         headers: {
//             "content-type": "application/json",
                // "Authorization": `Bearer ${localStorage.getItem("token")} `
//         }
//     }

//     try {
//         return await fetch(`${BASIC_URL}/${id}`,options)
//             .then(response => response.json())
//             .catch(reject => console.error(reject))
//     } catch (error) {
//         return error
//     }
// }
export const CreateProduct = async (Product) => {
    try {
        return await fetch(`${BASIC_URL}`, {
            method: "POST",
            body: JSON.stringify(Product),
            headers: {
                "content-type": "application/json",
                // "Authorization": `Bearer ${localStorage.getItem("token")} `
            }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const UpdateProduct = async (id, Product) => {
    try {
        return await fetch(`${BASIC_URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(Product),
            headers: {
                "content-type": "application/json",
                // "Authorization": `Bearer ${localStorage.getItem("token")} `
            }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const DeleteProduct = async (id) => {

    try {
        return await fetch(`${BASIC_URL}/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                // "Authorization": `Bearer ${localStorage.getItem("token")} `
            }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}