import { Axios } from "../../../App";

export class SearchApi {
    setCtx = null

    constructor(setter) {
        this.setCtx = setter
    }

    async find({ ProductGroupId }) {
        try {
            const response = await Axios.post("/af/find", JSON.stringify({ ProductGroupId, Take: 30 }))
            const data = await response.data

            this.setCtx(ps => ({ ...ps, results: data.Products, isFetching: false }))
        }
        catch (err) {
            this.setCtx((ps) => ({...ps, isFetching: false}))
            console.log(err)
        }
    }
}