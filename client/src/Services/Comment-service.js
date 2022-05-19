const BASIC_URL = "http://localhost:8000/comment";
export const GetAllComment = async () => {
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
export const GetProductComment = async (productId) => {
    let options ={
        headers: {
            "content-type": "application/json",
                // "Authorization": `Bearer ${localStorage.getItem("token")} `
        }}
    try {
        return await fetch(`${BASIC_URL}/idea/${productId}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const GetCommentById = async (id) => {
    let options ={
        headers: {
            "content-type": "application/json",
                // "Authorization": `Bearer ${localStorage.getItem("token")} `
        }
    }

    try {
        return await fetch(`${BASIC_URL}/${id}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const CreateComment = async (comment) => {
    try {
        return await fetch(`${BASIC_URL}`, {
            method: "POST",
            body: JSON.stringify(comment),
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
export const UpdateComment = async (id, comment) => {
    try {
        return await fetch(`${BASIC_URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(comment),
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
export const DeleteComment = async (id) => {

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