import { Axios } from "../../../App";

export class HomeApi {
    setCtx = null

    constructor(setter) {
        this.setCtx = setter
    }

    async loadPageContent() {
        try {
            const response = await Axios.post("/app/getall", JSON.stringify({ TagTake: 20, DynamicContentTake: 20 }))
            const data = await response.data;

            this.setCtx((ps) => ({
                ...ps,
                slider: data.DynamicLinks.Sliders,
                text: data.DynamicLinks.Texts,
                banner: data.DynamicLinks.Banners,
                gallery: data.DynamicLinks.Galleries,
                content: data.DynamicContents,
                isFetching: false
            }))
        }
        catch (err) {
            console.log(err);
        }
    }
}