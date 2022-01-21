import { Axios } from "../../../App";

export class ProductPageApi {
    setCtx = null

    constructor(setter) {
        this.setCtx = setter
    }

    async loadProduct(id) {
        try {
            const response = await Axios.post("/product/getdetails", { ProductID: id })
            const data = await response.data

            this.setCtx({ product: data, isFetching: false })
            return data
        }
        catch (err) {
            console.log(err)
        }
    }
}