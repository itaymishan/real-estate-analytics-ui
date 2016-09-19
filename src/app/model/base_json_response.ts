import {Meta} from './meta'
export class BaseJsonResponse {
    meta:Meta;

    constructor(jsonObj) {
        if (jsonObj != null) {
            this.meta = new Meta(jsonObj.meta);
        }
    }
}