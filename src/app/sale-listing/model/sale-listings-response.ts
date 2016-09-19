import {BaseJsonResponse} from "../../model/base_json_response";
import {SaleListing} from './sale-listing'

export class SaleListingsResponse extends BaseJsonResponse {
    sale_listing:SaleListing[];

    constructor(jsonObj = null) {
        super(jsonObj);
        if (jsonObj != null) {
            let response = new Array<SaleListing>();
            for (var saleListingJson of jsonObj.sale_listings) {
                response.push(new SaleListing(saleListingJson))
            }
            this.sale_listing = response;
        }
    }
}