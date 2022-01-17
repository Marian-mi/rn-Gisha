export class AppHelper {
    static ServerPath = "http://192.168.1.104:8182"

    static MapToServerPath = (path) => `${this.ServerPath}/${path}`
}

export class DynamicLink  {
    static PICTURE_PATH = "http://192.168.1.104:8182/images/FaraShop/dynamic-link/"
    
    static LinkTypes = {
        1: "Search",
        2: "ProductPage"
    }
}