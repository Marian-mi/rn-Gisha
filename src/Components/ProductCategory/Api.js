import { Axios } from "../../../App";

export class ProductCategoryApi {
    setCtx = null

    constructor(setter) {
        this.setCtx = setter
    }

    async loadMainCategories() {
        try {
            const response = await Axios.post("/category/getby", { SelectType: 0 })
            const data = await response.data

            this.setCtx((ps) => ({ ...ps, main: data, isFetching: false }))
            return data
        }
        catch (err) {
            console.log(err);
        }
    }

    static async getSubCategories(mainID) {
        const response = await Axios.post("/category/getby", { ParentID: mainID })
        const data = await response.data
        return data
    }
}