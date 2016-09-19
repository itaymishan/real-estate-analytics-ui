export class Meta {
    page:number;
    count:number;
    total:number;

    constructor(jsonObj = null) {
        if (jsonObj != null) {
            this.page = jsonObj.page;
            this.count = jsonObj.count;
            this.total = jsonObj.total;
        }
    }

}