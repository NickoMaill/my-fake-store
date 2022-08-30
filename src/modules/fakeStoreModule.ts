import * as apiManager from "../manager/apiManager";

export const getAllCatalog = async () => {
    return await apiManager.getRequest("/products")
}

export const getOneProduct = async (id: number) => {
    return await apiManager.getRequest(`/products/${id}`)
}